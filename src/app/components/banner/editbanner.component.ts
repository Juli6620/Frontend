import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';

@Component({
  selector: 'app-editbanner',
  templateUrl: './editbanner.component.html',
  styleUrls: ['./editbanner.component.css']
})
export class EditbannerComponent implements OnInit {
  educacion: Banner = null;
  banner: Banner;
  
  constructor(
    private bannerS: BannerService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.bannerS.detail(id).subscribe(
      data =>{
        this.banner = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.bannerS.update(id, this.banner).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la información");
        this.router.navigate(['']);
      }
    )
  }
}