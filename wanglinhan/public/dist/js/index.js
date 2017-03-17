(function(doc, win) {
    var docEl = doc.documentElement, // 获取html对象
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', // 横屏是否支持，不支持则为浏览器大小改变

        // 计算页面字体大小
        recalc = function() {
            // 获取页面宽度
            var clientWidth = docEl.clientWidth;
            // 获取不到页面宽度，直接返回
            if (!clientWidth) return;
            // 设置html字体大小(浏览器默认字体大小为16px)
            docEl.style.fontSize = clientWidth / 375 * 16 + "px";
        };
    // 不支持addEventListener,返回
    if (!doc.addEventListener) return;
    // 监听事件，获取当前html标签的字体大小
    win.addEventListener(resizeEvt, recalc, false);
    // dom内容加在完成事件
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);




// 1.定义模块
angular.module('wang', ['ngRoute'])

// 2.定义路由
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "/index"
        })
        .when('/shop', {
            templateUrl: "/shop",
            controller: "ShopController"
        })
        .when('/login', {
            templateUrl: "/login"
        })
        .otherwise({
            redirectTo: "/"
        })
})


// 定义控制器
.controller('IndexController', function($scope, $http) {
    // 商品列表数据
    $http.get('/data').then(function(msg) {
        $scope.shoplist = msg.data; // [{1},{2},{3}]
    })

    $scope.cartlist = [];
    $scope.add = function(index) { // index是shoplist的索引下标
        // 当前的商品是否在cartlist数组中存在
        if ($scope.cartlist.indexOf($scope.shoplist[index]) != -1) {
            $scope.shoplist[index]['num']++;
        } else {
            $scope.cartlist.push($scope.shoplist[index]);
        }
    }
})


// 购物车控制器
.controller('ShopController', function($scope) {
    //减法运算
    $scope.jian = function(index) {
        $scope.cartlist[index].num--;

        if ($scope.cartlist[index].num <= 1) {
            $scope.cartlist[index].num = 1;
        }
    }

    // 加法运算
    $scope.jia = function(index) {
        $scope.cartlist[index].num++;
    }

    // 删除数据
    $scope.del = function(index) {
        $scope.cartlist.splice(index, 1);
    }

    // 当监听isCheck的值发生变化的时候，重新计算总价格和总数量
    $scope.$watch('cartlist', function() {
        // 总数量
        $scope.total = { sum: 0, price: 0, isAll: true };

        angular.forEach($scope.cartlist, function(value, key) {
            // 计算被选中的总价格和总数量
            if (value.isCheck) {
                $scope.total.sum += value.num;
                $scope.total.price += value.num * value.price;
            } else {
                $scope.total.isAll = false;
            }
        })
    }, true)

    // 让isCheck和全选/全不选按钮挂钩
    $scope.change = function() {
        angular.forEach($scope.cartlist, function(value) {
            value.isCheck = $scope.all;
        })
    }
})
