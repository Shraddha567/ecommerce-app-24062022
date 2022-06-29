import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit{
    // constructor will be called at the time of the creation of object.
    
     constructor(){
       
    }
    
    ngOnInit(): void{
       
    }
}

// ngOnInit method will be triggered on load of the component...once object has been created for this component then this component will be loaded in this browser and once the loading of the component done then ngOnInit() function called and it can be onload function onload of the page.