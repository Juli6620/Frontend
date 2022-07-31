import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { LoginComponent } from './components/login/login.component';
import { NewProyectoComponent } from './components/proyecto/newproyecto.component';
import { EditProyectosComponent } from './components/proyecto/edit-proyecto.component';
import { EditSkillsComponent } from './components/hys/edit-skills.component';
import { NewSkillComponent } from './components/hys/new-skill.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path:'nuevoproy', component: NewProyectoComponent},
  { path:'editproy/:id', component: EditProyectosComponent},
  { path:'nuevaskill', component: NewSkillComponent},
  { path:'editskills/:id', component: EditSkillsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }