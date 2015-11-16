angular
  .module('whatsapp')
  .controller('DormirCtrl', DormirCtrl);

function DormirCtrl ($scope , $state) {
   
   var casasAleatorias = [];
   
   for (var i=0; i < 3; i++){
      casasAleatorias.push({id: i});
   }

   function makeRandom(inputArray){
    angular.forEach(inputArray, function(value){
      value.rank = Math.random();
    });
    return inputArray; 
   }

   $scope.casasAleatorias = makeRandom(casasAleatorias);

   console.log(casasAleatorias);

   

   $scope.items = [
      {  id: 1,
         nombre: 'Albergue La Noria',
         url: '/albergue-la-noria',
         web: 'http://albergue.aldeadavila.es',
         email: 'albergue@aldeadavila.es',
         tlf: '923 52 63 59',
         direccion: 'C/ Fuente s/n',
         descripcion: 'Construido como albergue en el año 1994. Muy moderno, práctico y concebido para todos los colectivos; especializado en Alojamiento a grupos infantiles, juveniles, familiares, colegios, asociaciones...Constituye un paraje perfecto para realizar cualquier estancia de ocio o de Educación Ambiental. Ideal para estancias vacacionales, educativas, reuniones, etc.', 
         image: 'img/casasRurales/albergue.jpg'
      },
      {  id: 2,
         nombre: 'Apartamentos La Corredera',
         url: '/apartamentos-la-corredera',
         web: 'http://aldeadavila.es/aldeadavila/index.php/alijamientos/lacorredera',
         email: '',
         tlf: '9+34 923 50 54 97',
         direccion: 'C/ Cristóbal Martín Herrera, nº 28',
         descripcion: 'Los Apartamentos Rupurupay se encuentran ubicados en una zona inmejorable de Aldeadávila de la Ribera, en Salamanca, muy cercano al centro cultural y al centro de salud y a penas a 150 metros del polideportivo con piscina.\nTodos los apartamentos son cómodos y agradables y contando con servicios como calefacción y aire acondicionado, terraza exterior común, salón con televisión, comedor con televisión, dos dormitorios dobles, cocina independiente bien equipada (incluye microondas y lavavajillas), patio interior y dos baños.\nEntre los servicios e instalaciones adicionales, el cliente podrá disfrutar de la bodega con chimenea, cocina y servicio (consultar disponibilidad), zona infantil, préstamo de libros y juegos, aparcamiento privado y préstamo de bicicletas (consultar disponibilidad).', 
         image: 'img/casasRurales/laCorredera.jpg'
      },
      {  id: 3,
         nombre: 'Apartamentos Rupurupay',
         url: '/apartamentos-rupurupay',
         web: 'http://www.apartamentosrupurupay.es',
         email: '',
         tlf: '+34 639730729',
         direccion: 'C/ CRISTÓBAL MARTÍN HERRERA Nº 28',
         descripcion: 'Son dos apartamentos ubicados en una zona inmejorable, al lado del Centro Cultural y Centro Médico, y a 150 m del Polideportivo (piscina).\nCada apartamento consta de salón con TV, comedor con TV, 2 dormitorios dobles, cocina independiente bien equipada (incluye microondas y lavavajillas), patio interior y 2 baños. Tienen calefacción y aire acondicionado.\nCada apartamento tiene capacidad para 4 personas, con  posibilidad de 1 ó 2 plazas más en sofá-cama (salón)  y posibilidad de cuna y/o trona (comunicar al hacer la reserva).\nDisponen de una terraza exterior común.\nSe ofrecen servicios extras gratuitos (ver menú principal).\nObservaciones: no se admiten animales.', 
         image: 'img/casasRurales/rupurupay.jpg'
      }
   ]
}