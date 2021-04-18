import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test', 'https://www.simplyrecipes.com/thmb/3QI11QIS3PNsXE7McR5MddKs6bk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__06__tandoori-chicken-horiz-a-1600-a92053df1c764ee1beaa91ae6383dcfd.jpg'),
    new Recipe('A Test Recipe', 'This is just a test', 'https://www.simplyrecipes.com/thmb/3QI11QIS3PNsXE7McR5MddKs6bk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__06__tandoori-chicken-horiz-a-1600-a92053df1c764ee1beaa91ae6383dcfd.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
