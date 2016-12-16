var paredazosApp = angular.module('paredazosApp', []);

paredazosApp.controller('NavigatorController', function NavigatorController($scope) {
  $scope.enlaces = [
    {
      titulo: 'Inicio',
      url: 'index.html'
    },
    {
      titulo: 'Las gallinas',
      url: 'lasgallinas.html'
    },
    {
      titulo: 'El huevo',
      url: 'elhuevo.html'
    },
    {
      titulo: 'Puntos de Venta',
      url: 'puntosdeventa.html'
    },
    {
      titulo: 'Natalia y Antonio',
      url: 'nataliayantonio.html'
    },
    {
      titulo: 'La aldea',
      url: 'laaldea.html'
    },
    {
      titulo: 'Blog',
      url: 'blog.html'
    },
    {
      titulo: 'Contacto',
      url:'contacto.html'
    }
  ];
});

/*
paredazosApp.controller('PuntosDeVentaController', function PuntosDeVentaController($scope) {
  $scope.puntos = [
    {
      tipo: 'Herboristería',
      nombre: 'TAO',
      direccion: 'c/Rosario, 84',
      ciudad: 'Albacete'
    },
    {
      tipo: 'Grupo de Consumo',
      nombre: 'LA CASA VIEJA',
      direccion: 'c/Blasco Ibañez, 9',
      ciudad: 'Albacete'
    },
    {
      tipo: 'Frutas y verduras',
      nombre: 'HERMANOS MADRIGAL',
      direccion: 'c/Collado Piña, 35',
      ciudad: 'Albacete'
    },
    {
      tipo: 'Frutas y verduras',
      nombre: 'EL JARDIN DE LA FRUTA',
      direccion: 'c/Alcalde Martínez de la Ossa, 1',
      ciudad: 'Albacete'
    },
  ];
});
*/
