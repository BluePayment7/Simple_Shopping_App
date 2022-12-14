import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple test.',
      'https://interactive.guim.co.uk/thrashers/recipes-header/hashed/recipe-top-image.70057171.jpg'
    ),
    new Recipe(
      'A Second Test Recipe',
      'This is a second simple test.',
      'https://interactive.guim.co.uk/thrashers/recipes-header/hashed/recipe-top-image.70057171.jpg'
    ),
  ];
  constructor() {}

  ngOnInit() {}
}
