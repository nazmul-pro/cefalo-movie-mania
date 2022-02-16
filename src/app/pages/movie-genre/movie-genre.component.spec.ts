import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedUiModule } from 'src/app/shared/modules/shared-ui.module';

import { MovieGenreComponent } from './movie-genre.component';

describe('MovieGenreComponent', () => {
  let component: MovieGenreComponent;
  let fixture: ComponentFixture<MovieGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieGenreComponent ],
      imports: [        
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
        SharedUiModule,
        BrowserAnimationsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    
  it('should return genre name', () => {
    component.genres = [{id: 1, name: 'G1'}];
    component.genreId = 1;
    expect(component.getGenreName()).toEqual('G1');
  });

  
  it('should return Not Found', () => {
    component.genres = [{id: 1, name: 'G1'}];
    component.genreId = 2;
    expect(component.getGenreName()).toEqual('Not Found');
  });
  
  it('should return No Genre', () => {
    expect(component.getGenreName()).toEqual('No Genre');
  });

  it('should complete clearSubs$', () => {
    const clearSubs$: Subject<any> = (<any>component).clearSubs$;
    expect(clearSubs$).toBeTruthy();
    component.ngOnDestroy();
    expect(clearSubs$.isStopped).toBeTruthy();
  });

  
});
