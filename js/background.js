    // var bg_color = 0x939393
    // var bg_color = 0x4C4C4C
    var bg_color = 0xa5a5a5
    var mouseX = 0, mouseY = 0,

      windowHalfX = window.innerWidth / 2,
      windowHalfY = window.innerHeight / 2,

      SEPARATION = 200,
      AMOUNTX = 10,
      AMOUNTY = 10,

      camera, scene, renderer;

      init();
      animate();

      function init() {

        var container, separation = 100, amountX = 50, amountY = 50,
        particles, particle;

        container = document.createElement('div');
        document.body.appendChild(container);

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 100;

        scene = new THREE.Scene();

        renderer = new THREE.CanvasRenderer();
        renderer.setClearColor( 0xffffff, 1);
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        // particles

        var PI2 = Math.PI * 2;
        var material = new THREE.SpriteCanvasMaterial( {

          color: bg_color,
          program: function ( context ) {

            context.beginPath();
            context.arc( 0, 0, 0.5, 0, PI2, true );
            context.fill();

          }

        } );

        var geometry = new THREE.Geometry();

        for ( var i = 0; i < 100; i ++ ) {

          particle = new THREE.Sprite( material );
          particle.position.x = Math.random() * 2 - 1;
          particle.position.y = Math.random() * 2 - 1;
          particle.position.z = Math.random() * 2 - 1;
          particle.position.normalize();
          particle.position.multiplyScalar( Math.random() * 10 + 450 );
          particle.scale.x = particle.scale.y = 10;
          scene.add( particle );

          geometry.vertices.push( particle.position );

        }

        // lines

        var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: bg_color, opacity: 0.5 } ) );
        scene.add( line );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );
        document.addEventListener( 'touchstart', onDocumentTouchStart, false );
        document.addEventListener( 'touchmove', onDocumentTouchMove, false );

        //

        window.addEventListener( 'resize', onWindowResize, false );

      }

      function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

      }

      //

      function onDocumentMouseMove(event) {

        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;

      }

      function onDocumentTouchStart( event ) {

        if ( event.touches.length > 1 ) {

          event.preventDefault();

          mouseX = event.touches[ 0 ].pageX - windowHalfX;
          mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

      }

      function onDocumentTouchMove( event ) {

        if ( event.touches.length == 1 ) {

          event.preventDefault();

          mouseX = event.touches[ 0 ].pageX - windowHalfX;
          mouseY = event.touches[ 0 ].pageY - windowHalfY;

        }

      }

      //

      function animate() {

        requestAnimationFrame( animate );

        render();

      }

      function render() {

        camera.position.x += ( mouseX - camera.position.x ) * .05;
        camera.position.y += ( - mouseY + 200 - camera.position.y ) * .05;
        camera.lookAt( scene.position );

        renderer.render( scene, camera );

      }









// var container;
//       var camera, scene, renderer, group, particle;
//       var mouseX = 0, mouseY = 0;

//       var windowHalfX = window.innerWidth / 2;
//       var windowHalfY = window.innerHeight / 2;

//       init();
//       animate();

//       function init() {

//         container = document.createElement( 'div' );
//         document.body.appendChild( container );

//         camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 3000 );
//         camera.position.z = 100;
//         scene = new THREE.Scene();



//         var PI2 = Math.PI * 2;
//         var program = function ( context ) {

//           context.beginPath();
//           context.arc( 0, 0, 0.5, 0, PI2, true );
//           context.fill();

//         }

//         group = new THREE.Object3D();
//         scene.add( group );

//         for ( var i = 0; i < 1000; i++ ) {

//           var material = new THREE.SpriteCanvasMaterial( {
//             color: 0xa5a5a5,
//             program: program
//           } );

//           particle = new THREE.Sprite( material );
//           particle.position.x = Math.random() * 2000 - 1000;
//           particle.position.y = Math.random() * 2000 - 1000;
//           particle.position.z = Math.random() * 2000 - 1000;
//           particle.scale.x = particle.scale.y = Math.random() * 20 + 10;
//           group.add( particle );
//         }

//         renderer = new THREE.CanvasRenderer();
//         renderer.setSize( window.innerWidth, window.innerHeight );
//         renderer.setClearColor( 0xffffff, 1);
//         container.appendChild( renderer.domElement );

//         document.addEventListener( 'mousemove', onDocumentMouseMove, false );
//         document.addEventListener( 'touchstart', onDocumentTouchStart, false );
//         document.addEventListener( 'touchmove', onDocumentTouchMove, false );

//         //

//         window.addEventListener( 'resize', onWindowResize, false );

//       }

//       function onWindowResize() {

//         windowHalfX = window.innerWidth / 2;
//         windowHalfY = window.innerHeight / 2;

//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();

//         renderer.setSize( window.innerWidth, window.innerHeight );

//       }

//       //

//       function onDocumentMouseMove( event ) {

//         mouseX = event.clientX - windowHalfX;
//         mouseY = event.clientY - windowHalfY;
//       }

//       function onDocumentTouchStart( event ) {

//         if ( event.touches.length === 1 ) {

//           event.preventDefault();

//           mouseX = event.touches[ 0 ].pageX - windowHalfX;
//           mouseY = event.touches[ 0 ].pageY - windowHalfY;

//         }

//       }

//       function onDocumentTouchMove( event ) {

//         if ( event.touches.length === 1 ) {

//           event.preventDefault();

//           mouseX = event.touches[ 0 ].pageX - windowHalfX;
//           mouseY = event.touches[ 0 ].pageY - windowHalfY;

//         }

//       }

//       //

//       function animate() {

//         requestAnimationFrame( animate );

//         render();
//       }

//       function render() {

//         camera.position.x += ( mouseX - camera.position.x ) * 0.05;
//         camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
//         camera.lookAt( scene.position );

//         group.rotation.x += 0.01;
//         group.rotation.y += 0.02;

//         renderer.render( scene, camera );

//       }


