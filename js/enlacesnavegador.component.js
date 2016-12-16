angular.
  module('paredazosApp').
  component('enlacesNavegador', {
    template:
        '<ul>' +
          '<li ng-repeat="enlace in $ctrl.enlaces">' +
            '<span>{{enlace.titulo}}</span>' +
            '<p>{{enlace.url}}</p>' +
          '</li>' +
        '</ul>',
    controller: function enlacesNavegadorController() {
      this.enlaces = [
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
    }
  });