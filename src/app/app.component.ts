import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as data from '../assets/datos.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba';
  datos=(data as any).default;

  agregarForm:FormGroup;
  nombre="";
  entidad="";
  email="";
  busca="";
  editnombre="";
  editentidad="";
  editemail="";
  block=false;
  temp=this.datos.rows;
  id;
  agregar(){
    this.datos.rows.push({"nombre":this.nombre,"Entidad":this.entidad,"Email":this.email})
    this.nombre="";
    this.entidad="";
    this.email="";
  }
  eliminar(index:any){
    this.datos.rows.splice(index,1)
  }
  clases=false;
  buscar(){
    this.datos.rows = this.temp;
    this.datos.rows=this.datos.rows.filter(obj=>obj.nombre.includes(this.busca)||obj.Email.includes(this.busca)||obj.Entidad.includes(this.busca))
    if(this.datos.rows.filter(obj=>obj.nombre.includes(this.busca)||obj.Email.includes(this.busca)||obj.Entidad.includes(this.busca)).length>0 && this.busca!=""){
      this.clases=true
    }else{
      this.clases=false
    }
  }  
  editar(index:any){
    this.id=index
    this.editnombre= this.datos.rows[this.id].nombre
    this.editentidad= this.datos.rows[this.id].Entidad
    this.editemail= this.datos.rows[this.id].Email
    this.block=true
  }
  guardar(){
    this.datos.rows[this.id]={
      nombre:this.editnombre,
      Entidad:this.editentidad,
      Email:this.editemail
    }
    this.block=false
  }
}
