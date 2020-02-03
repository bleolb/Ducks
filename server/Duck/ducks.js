const duck = require('../Behaivor/behaivor')

class Ducks {
    mallar() {
        const mallard = new duck();
        mallard.performFly().fly();
        mallard.performFly().FlyWithWings();
        mallard.performQuack().quack();
        mallard.swim();
    }

    patoCaucho() {
        const caucho = new duck();
        caucho.performFly().FlyNoWay();
        caucho.performQuack().noquack();
        caucho.swim();
    }
    patoMecanico() {
        const metal = new duck();
        metal.performFly().fly();
        metal.performFly().FlyWithCoeters();
        metal.performQuack().quick();
    }
}

module.exports = Ducks