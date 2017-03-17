;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-tubiao4" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M817.344 919.68c-44.992 0-81.6-36.48-81.6-81.664 0-44.928 36.608-81.472 81.6-81.472s81.536 36.544 81.536 81.472C898.944 883.2 862.4 919.68 817.344 919.68zM817.344 794.112c-24.192 0-43.968 19.584-43.968 43.904 0 24.384 19.776 44.032 43.968 44.032 24.256 0 43.904-19.712 43.904-44.032C861.248 813.696 841.6 794.112 817.344 794.112z"  ></path>' +
    '' +
    '<path d="M449.28 919.68c-44.992 0-81.664-36.48-81.664-81.664 0-44.928 36.672-81.472 81.664-81.472 44.928 0 81.536 36.544 81.536 81.472C530.816 883.2 494.208 919.68 449.28 919.68zM449.28 794.112c-24.32 0-43.968 19.584-43.968 43.904 0 24.384 19.648 44.032 43.968 44.032 24.256 0 43.968-19.712 43.968-44.032C493.184 813.696 473.472 794.112 449.28 794.112z"  ></path>' +
    '' +
    '<path d="M892.992 732.544 310.784 732.544c-6.336 0-11.968-3.136-15.552-8.128-3.584-5.12-4.288-11.648-2.048-17.408l54.08-143.36L204.032 141.952 82.88 141.952C72.384 141.952 64 133.504 64 123.136S72.384 104.32 82.88 104.32l134.656 0c8.064 0 15.232 5.12 17.792 12.8l149.696 440.832c1.408 4.096 1.408 8.576-0.192 12.672l-46.976 124.352 555.136 0c10.304 0 18.752 8.32 18.752 18.752C911.744 724.032 903.296 732.544 892.992 732.544z"  ></path>' +
    '' +
    '<path d="M836.352 582.656l-469.12 0c-10.368 0-18.752-8.32-18.752-18.688 0-10.496 8.384-18.944 18.752-18.944l455.296 0 92.864-290.048L260.096 254.976c-10.56 0-18.88-8.384-18.88-18.816 0-10.368 8.32-18.816 18.88-18.816l681.024 0c6.08 0 11.776 2.816 15.168 7.68 3.648 4.928 4.544 11.136 2.88 16.896L854.4 569.6C851.84 577.536 844.544 582.656 836.352 582.656z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-denglu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M875.052155 823.429939c-19.820418-51.561329-48.232514-97.906867-84.444251-137.749294-36.403095-40.054251-78.866209-71.533196-126.20947-93.566002-8.992815-4.185322-18.088984-7.988951-27.278273-11.418051 20.349467-11.520381 39.263236-25.873274 56.248072-42.85811 49.285496-49.285496 76.428693-114.813932 76.428693-184.514387 0-69.700455-27.142174-135.228891-76.428693-184.514387s-114.814955-76.428693-184.515411-76.428693-135.228891 27.143197-184.515411 76.428693c-49.285496 49.28652-76.428693 114.813932-76.428693 184.514387 0 69.700455 27.143197 135.228891 76.428693 184.514387 16.984836 16.984836 35.899628 31.337729 56.247049 42.85811-9.18929 3.430122-18.285458 7.232728-27.278273 11.418051-47.343261 22.031782-89.806375 53.511751-126.20947 93.566002-36.21276 39.84345-66.13628 85.633333-84.445274 137.749294-15.278985 43.48949-13.682627 86.440721-14.458293 106.500593l61.380976 0c-2.025123-143.258775 134.198421-310.976614 319.278697-310.976614 185.079252 0 324.882322 173.85563 325.419558 310.976614l61.379952 0C894.560464 891.158483 895.512139 876.651071 875.052155 823.429939zM309.306066 353.324094c0-110.028952 89.515756-199.544709 199.545732-199.544709 110.028952 0 199.545732 89.515756 199.545732 199.544709s-89.51678 199.544709-199.545732 199.544709C398.821823 552.868803 309.306066 463.353047 309.306066 353.324094z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouyeshouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1007.072 542.48 512.016 79.152 16.96 541.12c-9.68 9.04-10.224 24.24-1.168 33.92 9.04 9.68 24.24 10.224 33.92 1.168l462.272-431.36 462.288 432.672c4.64 4.336 10.528 6.48 16.4 6.48 6.4 0 12.8-2.544 17.52-7.6C1017.248 566.72 1016.752 551.536 1007.072 542.48zM856 552c-13.248 0-24 10.752-24 24l0 368L640 944 640 688 384 688l0 256L192 944 192 576c0-13.248-10.736-24-24-24S144 562.752 144 576l0 416 288 0L432 736l160 0 0 256 288 0L880 576C880 562.752 869.248 552 856 552zM688 208l144 0 0 128c0 13.264 10.752 24 24 24S880 349.264 880 336L880 160 688 160c-13.248 0-24 10.736-24 24S674.752 208 688 208z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)