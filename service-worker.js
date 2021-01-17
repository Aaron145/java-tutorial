/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cd4a70e1c8a937a665a1c92050e4faba"
  },
  {
    "url": "assets/css/0.styles.f3aeaaeb.css",
    "revision": "ebc1084daee064f41330bbc030eec2e8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.202d162c.js",
    "revision": "f004d6d7328a811b7013682ada48fe7b"
  },
  {
    "url": "assets/js/11.dd0b1aa5.js",
    "revision": "ee0e18cc2410de7cfc5306afc825dce0"
  },
  {
    "url": "assets/js/12.4df0aff0.js",
    "revision": "ce463be811aaf1d722583e3146600b6e"
  },
  {
    "url": "assets/js/13.e5ed4695.js",
    "revision": "89bfc342c784c362203088dae9e841be"
  },
  {
    "url": "assets/js/14.4bd71ccf.js",
    "revision": "b9ea2d92131ef23ef104c85c909c564c"
  },
  {
    "url": "assets/js/15.8d4eea1a.js",
    "revision": "6d363cfb0f2a80ba56f2582ccd90b2e1"
  },
  {
    "url": "assets/js/16.f9529ec3.js",
    "revision": "51c2bf922c40f4bbf010a84e16112543"
  },
  {
    "url": "assets/js/17.f5ff6aa2.js",
    "revision": "01feaeeb7db6fb50e63ff3ef0220928f"
  },
  {
    "url": "assets/js/18.0be2fc3e.js",
    "revision": "21d7ab92a8237f4f67ab0e4a1f7b36c0"
  },
  {
    "url": "assets/js/19.917d9134.js",
    "revision": "90f834f5d52e1b33906d3d248c53c616"
  },
  {
    "url": "assets/js/20.c2edfb87.js",
    "revision": "8c3d604a03aed6467dbc33fd6dcfea3c"
  },
  {
    "url": "assets/js/21.c2d89163.js",
    "revision": "fee197d5b36f61c818eec4c370625dde"
  },
  {
    "url": "assets/js/22.9d81b6c4.js",
    "revision": "c4a6a70b29e325abfa9c7c109c4e7314"
  },
  {
    "url": "assets/js/23.2a46f3e4.js",
    "revision": "134a2673bee079a4104eaa32c0c1dd12"
  },
  {
    "url": "assets/js/24.470788f0.js",
    "revision": "8398286a5e475f607f83103c1a725efd"
  },
  {
    "url": "assets/js/25.c7b70a07.js",
    "revision": "cd7f919e6fa91add192e342595f4eada"
  },
  {
    "url": "assets/js/26.08b78896.js",
    "revision": "d524c3f88f3e15262b0d17ec1bc3267d"
  },
  {
    "url": "assets/js/27.136e5c1e.js",
    "revision": "5f92dbaf25698bb0bab5620d2c4d53b7"
  },
  {
    "url": "assets/js/28.2853c8b8.js",
    "revision": "d66159ec24c8ffae5bcdca7a27b4b363"
  },
  {
    "url": "assets/js/29.ff25750b.js",
    "revision": "e01b244ba9ca0c2500100bb377122af8"
  },
  {
    "url": "assets/js/30.118d5e61.js",
    "revision": "741dfc02c1b0fee913a36e1eaeda7884"
  },
  {
    "url": "assets/js/31.dcdc4386.js",
    "revision": "eff2f4c790716bdb7895f33fa5bc777c"
  },
  {
    "url": "assets/js/32.5fdb77a2.js",
    "revision": "c4a794ee50da12f3490f8694c8ff9d12"
  },
  {
    "url": "assets/js/33.e37f3b33.js",
    "revision": "bf49e8ed170db5adda91fc402879fbab"
  },
  {
    "url": "assets/js/34.6e843075.js",
    "revision": "d270cafdfcc660a64e78295756ceda68"
  },
  {
    "url": "assets/js/35.c9f675d1.js",
    "revision": "08f46cc2c59271914413759dfc17d627"
  },
  {
    "url": "assets/js/36.8893550a.js",
    "revision": "c6318b3e59e25bc38c63449ce1b1699f"
  },
  {
    "url": "assets/js/37.d9760b9b.js",
    "revision": "02dc59ba07ba8a252f3018f9e4b22bf1"
  },
  {
    "url": "assets/js/38.45f6a28a.js",
    "revision": "d9b8db0c5c8ce62f372440ccd7bbefb4"
  },
  {
    "url": "assets/js/4.f9334130.js",
    "revision": "12cc72db3c2dbd3948d62baa3f6043e1"
  },
  {
    "url": "assets/js/5.41d66565.js",
    "revision": "c7c3ee40f751a1063d73911e3684f1a1"
  },
  {
    "url": "assets/js/6.b340f4c5.js",
    "revision": "9ae3c44aa2ddd901d38a670abb011a71"
  },
  {
    "url": "assets/js/7.5bb5dbbb.js",
    "revision": "f17e8739fcab79cabcf6bba90c6247de"
  },
  {
    "url": "assets/js/8.cb1c7502.js",
    "revision": "6c9f1f5071f5136f7f32ec9ee0083d04"
  },
  {
    "url": "assets/js/9.9703c25f.js",
    "revision": "0da43e1ebc88d89b154980c3dfded247"
  },
  {
    "url": "assets/js/app.ef05a498.js",
    "revision": "999daf2bd087fbf64b4edc7d1fa5c36c"
  },
  {
    "url": "assets/js/vendors~flowchart.6e42d0bd.js",
    "revision": "51de5c4ba58177148749a92004867ac2"
  },
  {
    "url": "assets/js/vendors~notification.ecb92178.js",
    "revision": "6fa917f78f32e3b33fb173fbda9afec4"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "7350d73130540a3288b5333f843b53bd"
  },
  {
    "url": "javaee/index.html",
    "revision": "818a91014940a3f9d0f6f817843e9827"
  },
  {
    "url": "javaee/javaee-cookie-sesion.html",
    "revision": "bff6bd81cd1dadfd3595757817889c66"
  },
  {
    "url": "javaee/javaee-filter-listener.html",
    "revision": "a0e43a80b8cae4909ac1c172d212f5fc"
  },
  {
    "url": "javaee/javaee-interview.html",
    "revision": "b9bb3c4cf7b3542be4772f5d06608285"
  },
  {
    "url": "javaee/javaee-jsp.html",
    "revision": "0b6fb201c1af6924b608b44113246c31"
  },
  {
    "url": "javaee/javaee-servlet.html",
    "revision": "201e6dc4d880ce252a6ab7908d185361"
  },
  {
    "url": "javatool/build/ant.html",
    "revision": "59f802fc6261370d526e2cf7defbdc3d"
  },
  {
    "url": "javatool/build/index.html",
    "revision": "313da164b117966ab217f972b6505d4d"
  },
  {
    "url": "javatool/build/maven/index.html",
    "revision": "1e997790b362ece4c3ed76a61792bc6e"
  },
  {
    "url": "javatool/build/maven/maven-action.html",
    "revision": "96f38435073c7239f72aea6fd83a9ac3"
  },
  {
    "url": "javatool/build/maven/maven-checkstyle-plugin.html",
    "revision": "c0f6634ebd03f713c9d70dbeac59a5b7"
  },
  {
    "url": "javatool/build/maven/maven-deploy.html",
    "revision": "640b06f53362ca0c3861952bd450f75b"
  },
  {
    "url": "javatool/build/maven/maven-pom.html",
    "revision": "a372f7c94b8fda706641fe3bdeb49616"
  },
  {
    "url": "javatool/build/maven/maven-quickstart.html",
    "revision": "fe9c4856dd2fac73e84cf358eba36092"
  },
  {
    "url": "javatool/build/maven/maven-settings.html",
    "revision": "cceadaf1eaa59a993f9693b4edaa621e"
  },
  {
    "url": "javatool/build/maven/sidebar.html",
    "revision": "d916833b0e8a368d84b7d6a3ed138834"
  },
  {
    "url": "javatool/ide/eclipse.html",
    "revision": "45a70e507d4fdecf9621c8cf84db5155"
  },
  {
    "url": "javatool/ide/index.html",
    "revision": "26ee3a85696cca518fb8b0ce32de5c44"
  },
  {
    "url": "javatool/ide/intellij-idea.html",
    "revision": "1a909c401d4c3a3a9aeb4f5b81e9da2c"
  },
  {
    "url": "javatool/ide/vscode.html",
    "revision": "d0adc5d75de00e63c3ada57e04c57d7e"
  },
  {
    "url": "javatool/index.html",
    "revision": "2dc2b244a69d572738bd75343a0bcbb6"
  },
  {
    "url": "javatool/monitor/arthas.html",
    "revision": "bc511f03dda45443524f2dbdc4b8c305"
  },
  {
    "url": "javatool/monitor/cat.html",
    "revision": "3b64776f02c8d5d4c56e44e23119bf35"
  },
  {
    "url": "javatool/monitor/index.html",
    "revision": "04ac4d0bea097f1235e397c3cf9acaa3"
  },
  {
    "url": "javatool/monitor/monitor-summary.html",
    "revision": "507791d65740801216a4bc168f43b046"
  },
  {
    "url": "javatool/monitor/skywalking.html",
    "revision": "f5a6fc5bee920bf914b5c64e9a101af9"
  },
  {
    "url": "javatool/monitor/zipkin.html",
    "revision": "608a9d5257a7a809b29206878c3ee0b6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
