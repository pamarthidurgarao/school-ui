import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/services/metadata.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  metaData: any;
  date = null;
  defaultAddress = true;

  constructor(private _location: Location, private metadataService: MetadataService) { }

  ngOnInit() {
    this.loadMetadata();
  }

  loadMetadata() {
    this.metadataService.getJson().subscribe(resp => {
      this.metaData = resp;
    });
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  closePage() {
    debugger
    this._location.back();
  }

}
