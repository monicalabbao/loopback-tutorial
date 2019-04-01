'use strict';

module.exports = function(Person) {
    Person.greet = (msg) => {
        return Promise.resolve({
            message: msg,
        });
    }
  
    Person.remoteMethod('greet', {
        http: {path: '/say/:msg', verb: 'GET'},
        accepts: [
            {arg: 'msg', type: 'string', http: {source: 'path'}},
        ],
        returns: {root: true, type: 'Object'}
    });
};
