angular
  .module('whatsapp')
  .controller('ListaCtrl', ListaCtrl);

function ListaCtrl ($scope , $state) {
   $scope.items = [
      {  id: 1,
         url: '/dormir', 
         principal: 'dónde dormir', 
         secundario: 'listado de lugares donde alojarse',
         image: 'img/listado/casasRurales.png'
      },
      {
         id: 2,
         url: '/turismo', 
         principal: 'qué visitar', 
         secundario: 'listado de lugares más interesantes',
         image: 'img/listado/lugaresInteres.png'
      },
      {
         id: 3,
         url: '/comer', 
         principal: 'dónde comer', 
         secundario: 'listado de restaurantes',
         image: 'img/listado/restaurantes.jpg'
      },
      {
         id: 4,
         url: '/senderismo', 
         principal: 'dónde ir andando', 
         secundario: 'listado de las rutas senderistas',
         image: 'img/listado/senderismo.png'
      },
      {
         id: 5,
         url: '/deportes', 
         principal: 'deportes', 
         secundario: 'información deportiva',
         image: 'img/listado/deportes.png'
      }
   ]
}