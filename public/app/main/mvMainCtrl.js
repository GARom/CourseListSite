angular.module('app').controller('mvMainCtrl', function($scope) {
  $scope.courses = [
    {name: 'CHEE 1131   The Challenge of Chem Eng', featured: true, published: new Date('10/5/2015')},
    {name: 'CHEM 1331   Fund. of Chemistry I', featured: true, published: new Date('10/12/2015')},
    {name: 'CHEM 1332   Fund. of Chemistry II', featured: false, published: new Date('10/1/2015')},
    {name: 'MATH 1432   Calculus II', featured: false, published: new Date('7/12/2015')},
    {name: 'CHEE 2331   Chemical Processes', featured: true, published: new Date('1/1/2015')},
    {name: 'CHEM 3331   Fund. of Org. Chem I', featured: true, published: new Date('10/13/2015')},
    {name: 'MATH 2433   Calculus III', featured: true, published: new Date('3/1/2015')},
    {name: 'CHEE 2332   Chem. Engr. Thermo. I', featured: true, published: new Date('2/1/2015')},
    {name: 'CHEE 3300   Materials Science & Engr. I', featured: true, published: new Date('10/7/2015')},
    {name: 'ENGI 2304   Technical Communications', featured: false, published: new Date('8/1/2015')},
    {name: 'CHE 3333    Chem. Engr. Thermo. II', featured: false, published: new Date('11/1/2015')},
    {name: 'CHEE 3363   Fluid Mech. for ChE', featured: true, published: new Date('10/13/2015')},
    {name: 'PHYS 1322   University Physics II', featured: false, published: new Date('10/1/2015')},
    {name: 'CHEE 3369   ChE Transport Process', featured: true, published: new Date('2/15/2015')},
    {name: 'CHEE 3466   Bio & Physical Chem', featured: true, published: new Date('7/1/2015')},
    {name: 'CHEE 4321   ChE Design I', featured: true, published: new Date('10/13/2015')},
    {name: 'CHEE 4367   Chem. Reaction Engr.', featured: true, published: new Date('2/15/2015')},
    {name: 'CHEE 4322   ChE Design II', featured: true, published: new Date('7/1/2015')}
  ]
});