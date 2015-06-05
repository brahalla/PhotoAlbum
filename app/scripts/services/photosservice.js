'use strict';

/**
 * @ngdoc service
 * @name photoAlbumApp.photosService
 * @description
 * # photosService
 * Factory in the photoAlbumApp.
 */
angular.module('photoAlbumApp')
  .factory('PhotosService', function ($resource) {
    return $resource('/api/photos/:id', { id: '@id' }, {
      'save': { method: 'POST', params: { action: 'create', format: '.json' } },
      'query': { method: 'GET', params: { action: 'read', format: '.json' } , isArray : true },
      'update': { method: 'PUT', params: { action: 'update', format: '.json' } },
      'delete': { method: 'DELETE' }
    });
  });