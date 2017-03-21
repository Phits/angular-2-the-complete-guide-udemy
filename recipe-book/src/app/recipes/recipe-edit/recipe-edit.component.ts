import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';


import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {
	private recipeIndex: number;
  private recipe: Recipe;
  private isNew = true;
	private subscription: Subscription;

  constructor(private route: ActivatedRoute, 
  	private recipeService: RecipeService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (paramas: any) => {
        if (paramas.hasOwnProperty('id')) {
           this.isNew = false;
           this.recipeIndex = +paramas['id'];
           this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        } else {
           this.isNew = true;
           this.recipe = null;
        }
      }
      	
    );
  }

  ngOnDestroy() {
     this.subscription.unsubscribe();
  }

  private initForm(isNew: boolean) {
      let recipeName = '';
      let recipeImageUrl = '';
      let recipeContent = '';
      let recipeIngredients: FormArray = new FormArray([]);

      if(!this.isNew) {
          for (let i = 0; i < this.recipe.ingredients.length; i++) {
              recipeIngredients.push(
                new FormGroup({
                  name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
                  amount: new FormControl(this.recipe.ingredients[i].amount)
                })
               );
          }
      }
  }

}





















