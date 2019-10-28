## [0.3.3](https://github.com/stuf/etm12-pixel-app/compare/v0.3.2...v0.3.3) (2019-10-28)


### Bug Fixes

* **scenes:** editor: terminate stream of image data when saving correctly ([1fb51a4](https://github.com/stuf/etm12-pixel-app/commit/1fb51a463b082ebb7c2b72de417b2e08d4413a7b))


### Features

* **core:** palette: add alpha palette ([5922efc](https://github.com/stuf/etm12-pixel-app/commit/5922efcaeb45a19444892205a6288f5350e57eba))



## [0.3.2](https://github.com/stuf/etm12-pixel-app/compare/v0.3.1...v0.3.2) (2019-10-28)


### Bug Fixes

* **scenes:** editor: remove snapshot testing ([f5318d0](https://github.com/stuf/etm12-pixel-app/commit/f5318d0c51336b57d273704ff0d51b09d84eb916))


### Features

* **components:** history: add controls related to history control ([aeb4ec4](https://github.com/stuf/etm12-pixel-app/commit/aeb4ec4d87c0213dc54a3e9b9af5eba97b2f86f1))
* **scenes:** editor: use new history controls for undo/redo ([15a2d80](https://github.com/stuf/etm12-pixel-app/commit/15a2d80598d0f7c4713a2a5c24ea2b0040cb6dda))



## [0.3.1](https://github.com/stuf/etm12-pixel-app/compare/v0.3.0...v0.3.1) (2019-10-28)


### Features

* **scenes:** editor: minor visual improvements, hide canvas size controls ([20d4dec](https://github.com/stuf/etm12-pixel-app/commit/20d4dec161ee144b628983995504b9b1c65e4778))



# [0.3.0](https://github.com/stuf/etm12-pixel-app/compare/v0.2.0...v0.3.0) (2019-10-28)


### Bug Fixes

* **components:** bitmap: don't attempt to update canvas data in cases without data ([42390b7](https://github.com/stuf/etm12-pixel-app/commit/42390b74e84b8b4eaab80a2ebb4516fcb085f11b))
* **components:** canvas/cursor: account for entire size of the pixel grid ([429b473](https://github.com/stuf/etm12-pixel-app/commit/429b4735785437aede7744d0b031e168b3db522c))
* **components:** cursor: use properly lifted functions for operations ([da91b0a](https://github.com/stuf/etm12-pixel-app/commit/da91b0a34fc2f0438f96a29da55e66960cffe821))
* **components:** palette: ensure mapElems gets a list ([4a3ed60](https://github.com/stuf/etm12-pixel-app/commit/4a3ed602f32b4c25145b055b19b1f3011ace3962))
* **components:** use proper lifted function for mapping ([cbc3e38](https://github.com/stuf/etm12-pixel-app/commit/cbc3e38e7a12da9b83f5785758f46d701c3950cb))
* **core:** _image: fix incorrect uint8 array being created ([6c9e67e](https://github.com/stuf/etm12-pixel-app/commit/6c9e67e0817607a9298d4e315410b27843d207ca))
* **scenes:** use mapValue instead of plain map, add base tests ([a203721](https://github.com/stuf/etm12-pixel-app/commit/a203721094932a7d76172025e561749b58793414))


### Features

* **common:** add common positioning helpers, meta ([c0f93d3](https://github.com/stuf/etm12-pixel-app/commit/c0f93d302e81cd488fed12e4d8f073207f30972c))
* **common:** canvas: add getContext function ([14c1893](https://github.com/stuf/etm12-pixel-app/commit/14c1893f8db8cc7781c42f52d3cf861b0018f78d))
* **common:** canvas: add imagedata getter ([ba9f5c0](https://github.com/stuf/etm12-pixel-app/commit/ba9f5c0af166443b520eaee8a7fb336546eec138))
* **common:** canvas: add saveImage function ([422b5a7](https://github.com/stuf/etm12-pixel-app/commit/422b5a7ff518ad1a8d6960341e569313e114a264))
* **common:** canvas: add scaling function for canvas scaling ([a5e93ad](https://github.com/stuf/etm12-pixel-app/commit/a5e93ad65576daefe043cd1d2de62f1ceccd887b))
* **common:** data: add instanceof checkers ([8c3f03c](https://github.com/stuf/etm12-pixel-app/commit/8c3f03c3d03376e2a2e915a7a07a61f08fb3e299))
* **common:** data: add rangeScaled with tests ([c0f57f9](https://github.com/stuf/etm12-pixel-app/commit/c0f57f9f1ff6442cb0ac784be80d5a3ec0e5b10f))
* **common:** events: add takeEvents utility ([f40187d](https://github.com/stuf/etm12-pixel-app/commit/f40187db1de96b80027aebf735eb3e676c011a6b))
* **common:** generic: move commonly used functionality from shared to common ([3c05ae4](https://github.com/stuf/etm12-pixel-app/commit/3c05ae4eec1c4a975f830ce2915264e348232971))
* **common:** meta: add common fst/snd accessors ([29535f2](https://github.com/stuf/etm12-pixel-app/commit/29535f2592047f54fd95a8bf49eea50e89af47a4))
* **common:** position: add bbox functions, tests ([00cb49b](https://github.com/stuf/etm12-pixel-app/commit/00cb49bb2a8a5748953d75c02c7c10d39736b40f))
* **common:** position: add roundPosition ([1dff5ac](https://github.com/stuf/etm12-pixel-app/commit/1dff5ac94abd2737ea2a5e50514f4e66da2d4037))
* **common:** position: add scalePosition and truncPosition ([fcb8c47](https://github.com/stuf/etm12-pixel-app/commit/fcb8c47846d02045f4b1bbd8cc84d7feb750e810))
* **common:** rules: add commonly used validator rules ([b86c13d](https://github.com/stuf/etm12-pixel-app/commit/b86c13d6e57810c49b68d286106ccf7ad00f4b25))
* **common:** update meta models ([cec942a](https://github.com/stuf/etm12-pixel-app/commit/cec942ae62ef665c3d4a393348393662124b2822))
* **common:** util: add common unit helpers ([89afbac](https://github.com/stuf/etm12-pixel-app/commit/89afbac23cb1daa4b07a1dc87de8422ba9c7a7aa))
* **common:** util: add surroundWith, parenthesize ([7b0ebfb](https://github.com/stuf/etm12-pixel-app/commit/7b0ebfbe905b92f5d0d33251b2018851ca4b5ae2))
* **common:** validators: add commonly used validator functions ([9264984](https://github.com/stuf/etm12-pixel-app/commit/9264984cb615116e5e4908d720aecb864d687a81))
* **components:** bitmap: add proper empty state implementation for canvas ([2d99c90](https://github.com/stuf/etm12-pixel-app/commit/2d99c90a43e576052275a7216cf2c23b0dab402d))
* **components:** bitmap: ensure Bitmap works better with possibly invalid data ([089f221](https://github.com/stuf/etm12-pixel-app/commit/089f221810f376dbd42724886c0a390dc1c8d3e1))
* **components:** button: add options for action, disabled state and grouping ([4e6737d](https://github.com/stuf/etm12-pixel-app/commit/4e6737d9c24c337e662408962b2a3af676a46de8))
* **components:** button: add support for id ([e5562d5](https://github.com/stuf/etm12-pixel-app/commit/e5562d5854d6422f6c12c3f73518caa4ae3b146b))
* **components:** button: allow buttons to have actual actions (omg) ([0d6900a](https://github.com/stuf/etm12-pixel-app/commit/0d6900a6bb3f36e5142837b177df1cc8c5c41a9a))
* **components:** canvas: allow override of where canvas ref is stored ([ad8dc94](https://github.com/stuf/etm12-pixel-app/commit/ad8dc947f88044568c883a7131ee881d58439f3d))
* **components:** canvas: remove deprecated canvas ([a0e7524](https://github.com/stuf/etm12-pixel-app/commit/a0e7524544d076bc5bd456042b7380f016ea8251))
* **components:** form: add incoming implementation to Range labels, snapshot tests ([a3e580c](https://github.com/stuf/etm12-pixel-app/commit/a3e580c2e1a6effb614b16eb28fc7b7108fc2e00))
* **components:** group: add new ui component ([9318120](https://github.com/stuf/etm12-pixel-app/commit/931812040422e9a2d78f9fa5b5e3097f4e0c7816))
* **components:** group: allow groups without header ([bb89043](https://github.com/stuf/etm12-pixel-app/commit/bb890437bea849d0830952e13b00437ac43b91a4))
* **components:** layout-panel: center content in panels by default ([75f472d](https://github.com/stuf/etm12-pixel-app/commit/75f472d04f5d1311f30633448c245783d82d2b41))
* **components:** layout: add Panel component ([5435edc](https://github.com/stuf/etm12-pixel-app/commit/5435edc398f648ea88dd6e44f6b9a40bf7962780))
* **components:** molecule: add Devtool component ([305d764](https://github.com/stuf/etm12-pixel-app/commit/305d764b6d2de96273def28df90e9d1884ab2d3b))
* **components:** molecule: refactor ([1a83cd1](https://github.com/stuf/etm12-pixel-app/commit/1a83cd16d6098fd6e4d430f0cf42895955c48c86))
* **components:** palette: remove usage of ABEM classnames ([adafec0](https://github.com/stuf/etm12-pixel-app/commit/adafec07e5dd395ec2db68367ee5cac3dbc47d93))
* **components:** time-control-button: use Button component instead ([ba634aa](https://github.com/stuf/etm12-pixel-app/commit/ba634aa0378ea69d184f498f428bc6a1c8865c54))
* **components:** ui: remove redundant Details and Menu components ([2b4ba4e](https://github.com/stuf/etm12-pixel-app/commit/2b4ba4e05f4f5ec549a853af6f723490f8fed675))
* **core:** canvas-data: use initial canvas size from start ([ea6a3d8](https://github.com/stuf/etm12-pixel-app/commit/ea6a3d813af92632c8bdc204ed4f4616830e3533))
* **core:** effects: add base effects implementation with validation ([0d4c276](https://github.com/stuf/etm12-pixel-app/commit/0d4c276caa4d2ab2521abf85c57287e3d48446cd))
* **core:** global-events: update global events, fix broken tests ([e756c5f](https://github.com/stuf/etm12-pixel-app/commit/e756c5f8db62bcfef7a210f9cc579646acffab8a))
* **core:** keyboard: allow keyboard events be bound to specific source ([876458b](https://github.com/stuf/etm12-pixel-app/commit/876458bf78097ecb8ccf376f59248b0161ba11fd))
* **core:** state: add bbox to drawable ([0a85fca](https://github.com/stuf/etm12-pixel-app/commit/0a85fcac4d28f905bb2aa2a3ebd847c0fd8ddb65))
* **core:** state: add drawable properties ([8b0f605](https://github.com/stuf/etm12-pixel-app/commit/8b0f6057936573f26236abdccd3b5b96f80b470d))
* **core:** state: add support for devtools ([2fa308f](https://github.com/stuf/etm12-pixel-app/commit/2fa308f146d59edb28500544e835d337bc58a7e7))
* **core-components:** canvas: add Cursor component ([219a736](https://github.com/stuf/etm12-pixel-app/commit/219a7367efc97bca4ae997e7c68bebaa45935c9e))
* **core-components:** canvas: add Drawable component ([69e34d3](https://github.com/stuf/etm12-pixel-app/commit/69e34d3d622f8b53b78c91993852c71043c76937))
* **core-components:** canvas: add OffsetGuide component ([135be11](https://github.com/stuf/etm12-pixel-app/commit/135be1107ad1763c6e20be0ca5468e404ff3b113))
* **core-components:** canvas: add PixelGrid component, tests ([8bb94d8](https://github.com/stuf/etm12-pixel-app/commit/8bb94d81d25755cc10098c488185344f90015917))
* **core-components:** canvas: implement new Canvas ([86e5a9b](https://github.com/stuf/etm12-pixel-app/commit/86e5a9b2cea56e2cf2f3542a4eb73d2864d7fb99))
* **core-components:** canvas: initial implementation for canvas with improved architecture ([aae6d51](https://github.com/stuf/etm12-pixel-app/commit/aae6d519a39264365f4b050c29e5458fbe974993))
* **routes:** add testing stage ([61cfdb6](https://github.com/stuf/etm12-pixel-app/commit/61cfdb653b3e9ee2cda05f4f4985d6dab12a12c6))
* **scenes:** editor: add support for saving current image ([ec5fb8b](https://github.com/stuf/etm12-pixel-app/commit/ec5fb8b9418c1935e1c41324423567cc85f6d6ea))
* **scenes:** editor: poop ([3803050](https://github.com/stuf/etm12-pixel-app/commit/3803050013b6d4168d7f106d454ec0c419191670))
* **scenes:** editor: rework for new canvas ([8f7dcda](https://github.com/stuf/etm12-pixel-app/commit/8f7dcda73d6bfa5313d730f22512058bfabad1b5))
* **scenes:** editor: show devtools only in dev mode ([0e87e53](https://github.com/stuf/etm12-pixel-app/commit/0e87e5321da7bfdbfc638c0341624a5632d027ae))
* **scenes:** editor: use error case for editor if no canvasData ([bef2f69](https://github.com/stuf/etm12-pixel-app/commit/bef2f69a79be063c0368dac1e6e2bb2fc392683d))
* **scenes:** editor: use group instead of details, implement collapsible later ([2a086b0](https://github.com/stuf/etm12-pixel-app/commit/2a086b090cc629a0c6c1d075b6acd6f633fd3375))
* **scenes:** splash: remove redirection if no target is given ([c7027c2](https://github.com/stuf/etm12-pixel-app/commit/c7027c22134ebd440b0f4f62bbb574f06e88e06f))
* **scenes:** splash: use Panel for layout centering ([ed72a0b](https://github.com/stuf/etm12-pixel-app/commit/ed72a0bb35bb8da838933ec49479701adb2fbf27))
* **settings:** canvas: add initial settings for size, scale ([848bb74](https://github.com/stuf/etm12-pixel-app/commit/848bb7419b11ce7d00c18fcbc9219a5a9e2cc4df))
* **styles:** core-components: relocate styles from css modules ([4414c05](https://github.com/stuf/etm12-pixel-app/commit/4414c053325bcde60fd56f824d0e9080e5c7d1db))
* **styles:** form: add custom appearance to range slider ([ca58c73](https://github.com/stuf/etm12-pixel-app/commit/ca58c7304c7c6a76a7b16d6785a1611ddb486ba0))
* **styles:** layout: add layout-specific stylesheets ([52028f6](https://github.com/stuf/etm12-pixel-app/commit/52028f63b8b32b92ce8531f8363f27e92b066d2f))
* **styles:** main: add root styles ([cd5921f](https://github.com/stuf/etm12-pixel-app/commit/cd5921f57eb2ce90fcb737739390b843b438c249))
* **styles:** reduce interface font size to ~14px ([6372c6a](https://github.com/stuf/etm12-pixel-app/commit/6372c6a38b6e9a52302d16ca5341eea81227c5ae))
* **styles:** update base component styles, scenes ([364cfbe](https://github.com/stuf/etm12-pixel-app/commit/364cfbe82a70a7517ca599ec97828d349295402d))
* **styles:** update form input styles ([4f34436](https://github.com/stuf/etm12-pixel-app/commit/4f344369ba8ac832b180b8bc403c5fe1b1532c0e))
* **styles:** variables: add base color variables for gray ([9f705b0](https://github.com/stuf/etm12-pixel-app/commit/9f705b05d9c81273a00ce83036c16b8b6e34f557))
* **validation:** rules: add arrayLike and tuple validation ([2c75961](https://github.com/stuf/etm12-pixel-app/commit/2c7596142e23fae6066e792c10781a10d70ad28d))



# [0.2.0](https://github.com/stuf/etm12-pixel-app/compare/08427ae1cecbd4d4a2349971cc2e0808a9001a3f...v0.2.0) (2019-10-17)


### Bug Fixes

* **components:** use proper mapper for transforming data ([f3b8708](https://github.com/stuf/etm12-pixel-app/commit/f3b87089c723fcf2be30da6d3923526f22306781))
* fix broken settings tests ([6be3659](https://github.com/stuf/etm12-pixel-app/commit/6be3659ca15160327170afcbef435898be0bbda0))
* **core:** add missing setting from canvas data state init ([951e01e](https://github.com/stuf/etm12-pixel-app/commit/951e01e580d7f742ff8398bdb62d9c2ca4c70b78))
* **tests:** unbreak settings validation tests ([a89bdeb](https://github.com/stuf/etm12-pixel-app/commit/a89bdeb33bae047c97cc1ae6aac27b16dc523f86))
* fix settings validation tests ([824a5ae](https://github.com/stuf/etm12-pixel-app/commit/824a5ae77957fce6c6031589edd4e85a7b0bdbf5))
* **components:** fix Bitmap component displaying nonproportionate pixels ([be7d1d2](https://github.com/stuf/etm12-pixel-app/commit/be7d1d274a393c931a8daee56cce608f78628d97))


### Features

* **common:** add data constructor module ([26a8617](https://github.com/stuf/etm12-pixel-app/commit/26a86171ecadde6b7bea35bd8cd20d1a6da828bb))
* **components:** add styles for Dropdown (module) ([900e8a9](https://github.com/stuf/etm12-pixel-app/commit/900e8a9e6568039d821b9cf3a7d73e3e479794f2))
* **styles:** add group component base classnames ([f1dd51d](https://github.com/stuf/etm12-pixel-app/commit/f1dd51dd6be97d8c45d4c4f0ed96a58112de9534))
* add history controls ([1f9df65](https://github.com/stuf/etm12-pixel-app/commit/1f9df6550020066b85d626a3c4df2752b9566bc2))
* add stuff ([cbc421d](https://github.com/stuf/etm12-pixel-app/commit/cbc421d96eeca1c67158f190d29b614721b579b6))
* add stuff ([03831dd](https://github.com/stuf/etm12-pixel-app/commit/03831dd1661e214e88e244bfc32a797963b2020f))
* add stuff ([325a627](https://github.com/stuf/etm12-pixel-app/commit/325a627dc556fb936c2639403ae7ad78c4cff3e7))
* **app:** improve application UI, docs ([40fb374](https://github.com/stuf/etm12-pixel-app/commit/40fb374f5535ebcc90ae64b5351644a35d1d2e5d))
* **canvas:** initial test for tools ([380efb7](https://github.com/stuf/etm12-pixel-app/commit/380efb712fa4029a42aae01aa1e7047efe1a6413))
* **common:** add common meta module ([0306262](https://github.com/stuf/etm12-pixel-app/commit/0306262161c8825bc35533077116650bdc4f4ab4))
* **components:** add build info to Header ([4757c7f](https://github.com/stuf/etm12-pixel-app/commit/4757c7f89063ca02144f309dc495763f508364ad))
* **components:** add BuildInfo component for Header ([a6c9336](https://github.com/stuf/etm12-pixel-app/commit/a6c9336bef66f3dae702ed58b87a989feec939a9))
* **components:** add Cursor component ([6547a31](https://github.com/stuf/etm12-pixel-app/commit/6547a313557a47c002f859e38655bafbe8c20f3c))
* **components:** add Dropdown form component ([a215e47](https://github.com/stuf/etm12-pixel-app/commit/a215e475b54561f5887db382e73f75487a2ed3b6))
* **components:** add fixes for canvas ([af73277](https://github.com/stuf/etm12-pixel-app/commit/af732774923fb21a73bf349eb6b69b61c08f9782))
* **components:** add form metamodule ([3e439ce](https://github.com/stuf/etm12-pixel-app/commit/3e439ce7926da9ab54939018bb88feba921a6162))
* **components:** add initial ColorStats component ([066b65b](https://github.com/stuf/etm12-pixel-app/commit/066b65be55caa168e080449142eda0bbf7083fd5))
* **components:** add Range form component ([18f370e](https://github.com/stuf/etm12-pixel-app/commit/18f370e12a890f291ac0129d5036c0dcbc121a80))
* **components:** allow colors with alpha ([c85da13](https://github.com/stuf/etm12-pixel-app/commit/c85da13f5c97864781916d613376fa8edc096967))
* **components:** allow drawing by mouse click in addition to drag ([0ff2434](https://github.com/stuf/etm12-pixel-app/commit/0ff2434afdaa80b84fe47221a132bd62bc092473))
* **components:** implement Cursor indicator ([ceb6304](https://github.com/stuf/etm12-pixel-app/commit/ceb6304c8020dcbf13271f6515848dc8c53666a9))
* **components:** pass through build env info to Header ([e9fbeca](https://github.com/stuf/etm12-pixel-app/commit/e9fbeca4a57361d93bc2c4c81eea7cdccd4a2b76))
* **components:** reduce straight object accessors in favor of configurable getters, update tests ([6dea4c3](https://github.com/stuf/etm12-pixel-app/commit/6dea4c3e42696a404d47fa866e98eb552b47691b))
* **components:** style fixes for Palette component ([49ae864](https://github.com/stuf/etm12-pixel-app/commit/49ae8644d51253d86d8e7905404cb827575855c5))
* **components:** update UI component typedefs ([6260c79](https://github.com/stuf/etm12-pixel-app/commit/6260c7981127b8d00fb6c7235a595988c6f648d5))
* **core:** add keyboard events ([79e3b1f](https://github.com/stuf/etm12-pixel-app/commit/79e3b1faee80d75bf84fedc3aee0cf2ffea746a0))
* **core:** add palette module ([a78172f](https://github.com/stuf/etm12-pixel-app/commit/a78172fed2c22fe73f032945503b7a8138c85e27))
* **core:** add tool item ([8f467d2](https://github.com/stuf/etm12-pixel-app/commit/8f467d2744caece6c0bd0fe3a68ed38314bacf47))
* **core:** extract common core functions ([849cbc6](https://github.com/stuf/etm12-pixel-app/commit/849cbc6f05fbd054d4e69db87d9e518fe748e84b))
* **scene:** add initial SplashScene ([dcfa759](https://github.com/stuf/etm12-pixel-app/commit/dcfa75910515f316b6c7b1d3d5150aaed704177f))
* **scene:** implement new Splash and Draw scenes ([b0324f4](https://github.com/stuf/etm12-pixel-app/commit/b0324f457f76b9238b569b99c4e162a091ec24ae))
* **scenes:** add DrawScene ([3b7afca](https://github.com/stuf/etm12-pixel-app/commit/3b7afca1c6853bb613164daa1e45a52632d254b6))
* **scenes:** add NotFound scene ([f169dbb](https://github.com/stuf/etm12-pixel-app/commit/f169dbb0c13bf768e418d76f1466d7833cd9555f))
* **scenes:** allow SplashScene to work with observable delays ([ee5e944](https://github.com/stuf/etm12-pixel-app/commit/ee5e944864c7c310d1fa9e413da65d75a1a1b2d2))
* **scenes:** implement NotFound scene in Main ([8379d5b](https://github.com/stuf/etm12-pixel-app/commit/8379d5b7a44fda553cb26c09c67d3bd70c074e97))
* **scenes:** move old main scene to editor scene ([82acf75](https://github.com/stuf/etm12-pixel-app/commit/82acf752940e145e519b1403001ab81a69f7ee19))
* **scenes:** phase old main scene to its own ([5c749d4](https://github.com/stuf/etm12-pixel-app/commit/5c749d44e50245fbdf1f24422baff82be375812c))
* **settings:** add base settings file ([81c5e0b](https://github.com/stuf/etm12-pixel-app/commit/81c5e0b3686f9eb6a8c0e083a7ffc9ce5b07fb88))
* **shared:** add observable helpers ([397df00](https://github.com/stuf/etm12-pixel-app/commit/397df0029941ad46fc9d0f1c3a8ef4ea67c60b16))
* **shared:** add support for alpha colors to fromHex ([dcfe2e6](https://github.com/stuf/etm12-pixel-app/commit/dcfe2e61ab8729aabb3f912b34b8d11b6c1adbea))
* **styles:** add helper CSS classnames ([7709792](https://github.com/stuf/etm12-pixel-app/commit/7709792a571967d7789938ac1d42cff67239a4ae))
* **validation:** add validation rules ([169a03f](https://github.com/stuf/etm12-pixel-app/commit/169a03f7ff90d63854f1f32659432c399784feb2))
* add MainScene ([a0db3c1](https://github.com/stuf/etm12-pixel-app/commit/a0db3c153b94007bc46c7773d6a3972e04b39b1e))
* add new palettes ([671a5bb](https://github.com/stuf/etm12-pixel-app/commit/671a5bbf6663d4cc0e85dba95e79124ad8ec3261))
* phase into using scene-based approach to application ([503777d](https://github.com/stuf/etm12-pixel-app/commit/503777d96b1336d04e6810866dcef6809c9df52a))
* update Main scene ([849d862](https://github.com/stuf/etm12-pixel-app/commit/849d862416a16612d648d1058065a3b3e08e672b))
* update old root component's imports ([f7c42dc](https://github.com/stuf/etm12-pixel-app/commit/f7c42dc103a03ad83a4d5bcadd713da54902f493))
* **styles:** add generic list styles ([e586878](https://github.com/stuf/etm12-pixel-app/commit/e586878ce58d4a30d21b377c12d72b24f66bc738))
* **styles:** make UI scrollable ([66016da](https://github.com/stuf/etm12-pixel-app/commit/66016daa3831126c74646154e73924e51c3c4158))
* use Range control for history ([fe7caca](https://github.com/stuf/etm12-pixel-app/commit/fe7cacac7d4dfe22659aea5299598087399a1a16))
* **app:** add Menu component to App ([ef87a1a](https://github.com/stuf/etm12-pixel-app/commit/ef87a1a7766eadb0e82fa2936f53b1190c3a7625))
* **app:** reorganize interface ([9240c48](https://github.com/stuf/etm12-pixel-app/commit/9240c48e9b7207b610162840d1cee3501960488c))
* **canvas:** add proper drawing and history ([6c45533](https://github.com/stuf/etm12-pixel-app/commit/6c4553343a650219e8caf084b6d8bd6dabac2443))
* **canvas:** add proper typedefs to Canvas component ([8fa16da](https://github.com/stuf/etm12-pixel-app/commit/8fa16da3973b8e59b57935a52925d84705fc0be8))
* **components:** add Bitmap to work on non-Observable data ([7f1f2dd](https://github.com/stuf/etm12-pixel-app/commit/7f1f2dd49caeb0e77f4879f8a03f63080c7ec357))
* **components:** add typedefs for button ([7bf31b6](https://github.com/stuf/etm12-pixel-app/commit/7bf31b6bf664bc5d721811568d4eda9e7b60edd4))
* **styles:** improve fieldset styles ([843fa61](https://github.com/stuf/etm12-pixel-app/commit/843fa61fbdabcdc6eecb30a1d0fefe94c072ec4a))
* move components into new structures ([e174a34](https://github.com/stuf/etm12-pixel-app/commit/e174a347fed95d9def8a20ebfb8eed3d0ca85e87))
* **components:** make Bitmap component be agnostic about its data ([a5d3757](https://github.com/stuf/etm12-pixel-app/commit/a5d37579ba2c66dbd91af4b78016c73d9bf0dae1))
* refactor menu item configuration ([4955790](https://github.com/stuf/etm12-pixel-app/commit/49557905c287d461cf64c4cc81cfed54bfec16f8))
* use Details component for preview ([e953b4d](https://github.com/stuf/etm12-pixel-app/commit/e953b4d11cfb3a2ff7404f3a155147b1b28452a6))
* **app:** use new dedicated components for sidebar panels ([4c36d38](https://github.com/stuf/etm12-pixel-app/commit/4c36d38b0a12a385d1cf2a0de6ae06ba0f796d98))
* **canvas:** add debug information ([ae0b5ec](https://github.com/stuf/etm12-pixel-app/commit/ae0b5ec98e311307f01a8af2e02b62464e1fe583))
* **canvas:** implement canvas-data as data source ([8b4ab47](https://github.com/stuf/etm12-pixel-app/commit/8b4ab47f223d99be34d8016c74045d8c3147b614))
* **canvas:** stop drawing when mouse is moved outside of the canvas element ([571b25b](https://github.com/stuf/etm12-pixel-app/commit/571b25b6f9ae69df910e30e0a61cc80a69984bb0))
* **components:** add Bitmap component for displaying images ([294bcf4](https://github.com/stuf/etm12-pixel-app/commit/294bcf43e2f3503737ea7bcaaa88a4c8a907e75f))
* **components:** add input component ([5fe91bc](https://github.com/stuf/etm12-pixel-app/commit/5fe91bc64c057adaea891afc2f6a0de333c8606b))
* **components:** make Bitmap component work properly again ([92a0a16](https://github.com/stuf/etm12-pixel-app/commit/92a0a16aba0fe3b7cbfc457fab76e0c91d12e62f))
* **components:** support new fields for Palette ([b8c115d](https://github.com/stuf/etm12-pixel-app/commit/b8c115dafea5529f7f5957d5d777641a7e162c07))
* **core:** add imagedata module, add JSDoc ([2206912](https://github.com/stuf/etm12-pixel-app/commit/2206912e8a6d6a09072fce37d2e7622f0c4ceb90))
* **core:** add typedefs for canvasData ([da1de9a](https://github.com/stuf/etm12-pixel-app/commit/da1de9a7b38fa4a5db07cbc91eff2523f67c724f))
* **core:** change typedefs for mouse events ([6a38706](https://github.com/stuf/etm12-pixel-app/commit/6a38706ede698be176fc30a804a70e8a98baa9be))
* **core:** rename actions -> effects ([d841f80](https://github.com/stuf/etm12-pixel-app/commit/d841f80f0b99d3813229c4ec03665a0f24c998fb))
* **core:** support menu in state ([432fac7](https://github.com/stuf/etm12-pixel-app/commit/432fac76369e43f5c3c6b33cb1e8b0653190d72d))
* **core:** use typedefs for state ([83501f8](https://github.com/stuf/etm12-pixel-app/commit/83501f8fb7373c185413b6ac6040af5c41a3c979))
* **form:** add Field form component ([9174083](https://github.com/stuf/etm12-pixel-app/commit/9174083ab7a8f5e1ffeeb9d1903b4e10f74cc65c))
* **io:** add initial implementation of saving images ([08e9e91](https://github.com/stuf/etm12-pixel-app/commit/08e9e9108908be3f8da1ee6ff2e25f180eec5bff))
* **io:** add saveImageFromCanvas functionality ([db1c2d4](https://github.com/stuf/etm12-pixel-app/commit/db1c2d4bd4f6f6429797f18a63a3bbb46d6fb710))
* **layout:** use Details component for color palette ([3b498fb](https://github.com/stuf/etm12-pixel-app/commit/3b498fb8dbf03db4c4743597d0d3714f3df84d91))
* **menu:** add undo/redo placeholders to menu ([62e032a](https://github.com/stuf/etm12-pixel-app/commit/62e032a403cc4242c1ee256c23950c4678f4a21a))
* **menu:** make menu font size smaller ([21a334e](https://github.com/stuf/etm12-pixel-app/commit/21a334e7f01888ea17553b1b84db7017615afbf3))
* **meta:** add rewrite lens ([5d2a485](https://github.com/stuf/etm12-pixel-app/commit/5d2a48520d90be54c18fdcdfc3a9f8579a4a967d))
* **palette:** implement YIQ for color switcher ([2c58e2a](https://github.com/stuf/etm12-pixel-app/commit/2c58e2a3bcfa5aa0cadb6e226ea2218654aec8f4))
* **shared:** add stdDev, tests for stdDev ([009e563](https://github.com/stuf/etm12-pixel-app/commit/009e5636df2331a06b395a58c9afc95f8ea76cd8))
* **shared:** get imagedata function ([c609906](https://github.com/stuf/etm12-pixel-app/commit/c60990688215d4a9b3adbd017964bae6634b0a56))
* **styles:** add input, debug styles ([6f004cd](https://github.com/stuf/etm12-pixel-app/commit/6f004cddab85b669cd8556b432799b57db3ea98e))
* **styles:** add some global styles ([7218e32](https://github.com/stuf/etm12-pixel-app/commit/7218e32b9398a6ab43f6250ee2d50cdc8ac2dbdd))
* **styles:** base style changes ([968146a](https://github.com/stuf/etm12-pixel-app/commit/968146a9ae7a87eb3efbe9cf84c0559af991c97f))
* **styles:** update base font ([89595ef](https://github.com/stuf/etm12-pixel-app/commit/89595ef7b0c68eef271f32ff03e45e0e6ea736db))
* **typedefs:** add karet.util typedefs ([4f2ec45](https://github.com/stuf/etm12-pixel-app/commit/4f2ec453fbca21b016feb6be3abc67349c8a9c91))
* **ui:** add Details component ([35617e9](https://github.com/stuf/etm12-pixel-app/commit/35617e93faf2cb8fefe14a920676a31cd54b6885))
* add typedefs to base ([3c7eca4](https://github.com/stuf/etm12-pixel-app/commit/3c7eca4e80b8054684b43408011a0e95565a630b))
* **typedefs:** add core typedefs ([f9a5372](https://github.com/stuf/etm12-pixel-app/commit/f9a5372d87ee91d0f6a4b277667ae3caa257b06d))
* **ui:** add Menu component ([0a8e046](https://github.com/stuf/etm12-pixel-app/commit/0a8e0463bce1c37847f914d84fd6816b4fa8f0ff))
* add constants file ([c460ea2](https://github.com/stuf/etm12-pixel-app/commit/c460ea27f7f01f3a0cdb825f9edb1a6ead03f1a6))
* use new stylesheets and components ([1fb57e7](https://github.com/stuf/etm12-pixel-app/commit/1fb57e79e791294f55b8e792b871e0043a839879))
* **styles:** change primary font face ([a39ba25](https://github.com/stuf/etm12-pixel-app/commit/a39ba25ec759b701daffbdd51699cc06ca085476))
* **styles:** use 'IBM Plex Mono' as primary font family ([41fc33b](https://github.com/stuf/etm12-pixel-app/commit/41fc33b110bdd81a10b0bf56cc5649950b70b6a7))
* **utils:** add YIQ lifted function ([08427ae](https://github.com/stuf/etm12-pixel-app/commit/08427ae1cecbd4d4a2349971cc2e0808a9001a3f))



