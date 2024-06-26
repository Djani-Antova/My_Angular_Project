import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';

@Component({
  selector: 'app-themes-all',
  templateUrl: './themes-all.component.html',
  styleUrls: ['./themes-all.component.css']
})
export class ThemesAllComponent implements OnInit {
  themesList: Theme[] = [];
  subscription!: Subscription;  
  errMessage!: string; 

  constructor(private api: ApiService, ) { }

  ngOnInit(): void {
  

    this.subscription = this.api.getThemes().subscribe({ 
      next: (themes) => {
        this.themesList = themes;        
      },
      error: (err) => {
        this.errMessage = err.error.message || 'An error occurred while fetching themes.';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}


