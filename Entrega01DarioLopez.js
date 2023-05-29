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

        //Creamos el objeto con los atributos indicados

        if(this.products.length ==0 && title != undefined && descripcion != undefined && price != undefined && 
            thumbnail != undefined && code != undefined && stock != undefined ){
            
            const product = {
            
                id: this.getNextID(),
            
                title: title,
            
                descripcion: descripcion,
            
                price: price,
            
                thumbnail: thumbnail,
            
                code: code,
            
                stock: stock,
            }
            
            return this.products.push(product)
        }
        
        this.products.forEach(element=>{
        
            if(element.code != code && title != undefined && descripcion != undefined && price != undefined && 
                thumbnail != undefined && code != undefined && stock != undefined){
        
                const product = {
                
                    id: this.getNextID(),
                
                    title: title,
                
                    descripcion: descripcion,
                
                    price: price,
                
                    thumbnail: thumbnail,
                
                    code: code,
                
                    stock: stock,
                }
                
                return this.products.push(product)
         
            }else if(element.code == code && title != undefined && descripcion != undefined && price != undefined && 
             
                thumbnail != undefined && code != undefined && stock != undefined){
             
                return console.log('No se pueden crear productos con el mismo code')
            }
    })
    
    if(code == undefined || title == undefined || descripcion == undefined || price == undefined || thumbnail == undefined || stock== undefined){
      
        return console.log('No se pueden crear productos con campos vacíos')
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
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc123',25)
//Imprimimos ahora el arreglo
console.log('**********CREAMOS EL PRIMER PRODUCTO Y LO AGREGAMOS**********')
console.log(productManager01.getProducts())
console.log('\n')
//Intentamos agregar un producto con el codigo repetido y nos imprime un error
console.log('**********CREAMOS PRODUCTOS REPETIDOS**********')
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc123',25)
console.log('\n')
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc123',25)
console.log('\n')
//Agregamos un nuevo producto,esta vez que no se repita
console.log('**********AGREGAMOS UN NUEVO PRODUCTO VÁLIDO**********')
productManager01.addProducts('producto prueba','Este es un producto de prueba',200,'Sin imagen','abc13',25)
//Mostramos los dos productos
console.log('**********MOSTRAMOS LOS PRODUCTOS**********')
console.log(productManager01.getProducts())
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
//Buscamos y mostramos el producto con el code: abc13
console.log('**********BUSCAMOS EL PRODUCTO CON CODE abc13**********')
console.log(productManager01.getProductByld('abc13'))
console.log('\n')
//Buscamos un producto que no exista
console.log('**********BUSCAMOS UN PRODUCTO QUE NO EXISTA**********')
console.log(productManager01.getProductByld('abc1234'))