//Definimos la clase Product Manager

class ProductManager {

    //Definimos el contructor de la clase

    constructor(){

        this.products = [] //En este caso solo se va a crear un arreglo vacio, donde se iran agregando los productos

    }

    //Definimos un metodo que nos permita crear el ID autoincrementable
    getNextID = () =>{

        const count = this.products.length //Primero leemos la cantidad de elementos que tiene el arreglo productos

        if(count>0) return this.products[count - 1].id + 1 //Si el arreglo tiene elementos, leemos cuantos. Si tiene por 

        //ejemplo 2 elementos, son los de la posicion 0 y 1. Vamos a la posicion [2-1],leemos el ID y le sumamos 1.

        return 1 //Si la longitud del arreglo es 0, significa que no tiene elementos todavía y el primer ID es 1
    }

    //Definimos el metodo que crea los productos y los agrega al arreglo de productos si cumple con las condiciones dadas
    addProducts = (title, descripcion, price, thumbnail, code, stock) => {
        function validarProducto(product) {
            for (let campo in product) {
              if (!product[campo]) {
                return false;
              }
            }
            return true;
        }


        const product = {
            id: this.getNextID(),
            title: title,
            descripcion : descripcion,
            price: price,
            thumbnail:thumbnail,
            code:code,
            stock:stock
        }

        const codeRep = this.products.some(element=>element.code === code)
        if(codeRep){
            return console.log('No se pueden crear productos con code repetido')
        }

        if(validarProducto(product)){
            return this.products.push(product)
        }else{
            return console.log('No pueden crearse productos con campos incompletos')
        }

    }


    //Definimos el metodo que devuelve el array donde estan todos los productos
    getProducts = ()=>{
    
        return this.products
    
    }
    
    getProductByld = (code)=>{
    
        let test
    
        const result = this.products.find(element=>{
    
            test = element.code == code
    
            return test
        })
    
        if(test) return result
            return 'Not found'
        
    }
}
//Creamos una instancia de la clase
const productManager01 = new ProductManager()
//Imprimimos el arreglo de los productos,que al principio debe estar vacio
console.log('**********ARREGLO VACIO**********')
console.log(productManager01.getProducts())
console.log('\n')
//Creamos un objeto producto y lo agregamos al arreglo
//Imprimimos ahora el arreglo
console.log('**********CREAMOS EL PRIMER PRODUCTO Y LO AGREGAMOS**********')
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc123',25)
console.log(productManager01.getProducts())
console.log('\n')
//Intentamos agregar un producto con el codigo repetido y nos imprime un error
console.log('**********CREAMOS PRODUCTOS REPETIDOS**********')
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc123',25)
console.log('\n')
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc123',25)
console.log('\n')
//Agregamos un nuevo producto,esta vez que no se repita
console.log('**********AGREGAMOS PRODUCTOS VALIDOS**********')
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc13',25)
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc555',25)
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc888',25)
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc999',25)
console.log('**********Mostramos el array de productos**********')
console.log(productManager01.getProducts())
console.log('\n')
//Creamos mas productos repetidos
console.log('**********CREAMOS PRODUCTOS REPETIDOS**********')
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc123',25)
console.log('\n')
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc13',25)
console.log('\n')
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc555',25)
console.log('\n')
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc888',25)
console.log('\n')
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc999',25)
console.log('\n')
//Intentamos agregar productos con campos incompletos
console.log('**********INTENTAMOS AGREGAR PRODUCTOS INCOMPLETOS**********')
productManager01.addProducts('Este es un producto de prueba',200,'Sin imagen','abc135',25)
console.log('\n')
productManager01.addProducts('producto prueba',200,'Sin imagen','abc136',25)
console.log('\n')
productManager01.addProducts('producto prueba','Este es un producto de prueba','Sin imagen','abc13',25)
console.log('\n')
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'abc13',25)
console.log('\n')
productManager01.addProducts('','',1,'','',1)
console.log('\n')
productManager01.addProducts('','',1,'','',1)
console.log('\n')
productManager01.addProducts('Producto prueba','','','','','')
console.log('\n')
productManager01.addProducts('','','','','','')
console.log('\n')
//Buscamos y mostramos el producto con el code: abc13
console.log('**********BUSCAMOS EL PRODUCTO CON CODE abc13,abc123,abc:555,abc:888,abc:999**********')
console.log('Producto abc13')
console.log(productManager01.getProductByld('abc13'))
console.log('\n')
console.log('Producto abc123')
console.log(productManager01.getProductByld('abc123'))
console.log('\n')
console.log('Producto abc555')
console.log(productManager01.getProductByld('abc555'))
console.log('\n')
console.log('Producto abc888')
console.log(productManager01.getProductByld('abc888'))
console.log('\n')
console.log('Producto abc999')
console.log(productManager01.getProductByld('abc999'))
console.log('\n')
//Buscamos un producto que no exista
console.log('**********BUSCAMOS PRODUCTOS QUE NO EXISTAN**********')
console.log(productManager01.getProductByld('abc1234'))
console.log('\n')
console.log(productManager01.getProductByld('ABC123'))
console.log('\n')
console.log(productManager01.getProductByld('ABC888'))
console.log('\n')
console.log(productManager01.getProductByld('ABC999'))
console.log('\n')
//Mostramos todos los productos que quedaron bien agregados
console.log('Productos agregados correctamente: ')
console.log('\n')
console.log(productManager01.getProducts())