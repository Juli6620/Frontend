import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectosComponent implements OnInit {
  proy : Proyectos = null;

  constructor(private sProyectos: SProyectosService, private activatedRouter: ActivatedRoute,
    private router: Router ) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sProyectos.detail(id).subscribe(
        data => {
          this.proy = data;
        }, err =>{
          alert("Error al modificar proyecto");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sProyectos.update(id, this.proy).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar proyecto");
          this.router.navigate(['']);
        }
      )
    }

}