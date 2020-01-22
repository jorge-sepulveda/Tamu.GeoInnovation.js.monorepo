import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { LayerSource } from '@tamu-gisc/common/types';
import { MapConfig, EsriMapService } from '@tamu-gisc/maps/esri';
import { BasePopupComponent } from '@tamu-gisc/maps/feature/popup';

import esri = __esri;

@Component({
  selector: 'tamu-gisc-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public config: MapConfig = {
    basemap: {
      basemap: 'streets-navigation-vector'
    },
    view: {
      mode: '2d',
      properties: {
        center: [-97.657046, 26.450253],
        zoom: 11
      }
    }
  };

  public form: FormGroup;
  public form2: FormGroup;

  public map: esri.Map;
  public view: esri.MapView;

  public form2Layers: Observable<Array<string>>;

  constructor(
    private fb: FormBuilder,
    private mapService: EsriMapService,
    private http: HttpClient,
    private router: Router
  ) {}

  public ngOnInit() {
    this.form = this.fb.group({
      url: ['', Validators.required]
    });

    this.mapService.store.subscribe((instances) => {
      this.map = instances.map;
      this.view = instances.view as esri.MapView;
    });
  }

  // public async submit() {
  //   const value = this.form.getRawValue();

  //   const layerInfo: ILayerInfo = await this.http.get(`${value.url}?f=json`).toPromise();

  //   const source: LayerSource = {
  //     type: 'feature',
  //     url: value.url,
  //     id: layerInfo.name.toLowerCase().replace(/ /g, '-') + '-layer',
  //     title: layerInfo.name,
  //     native: {
  //       outFields: ['*']
  //     },
  //     popupComponent: BasePopupComponent
  //   };

  //   this.mapService.loadLayers([source]);
  // }
}

interface ILayerInfo extends Object {
  name?: string;
}
