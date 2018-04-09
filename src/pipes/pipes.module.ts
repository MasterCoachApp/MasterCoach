import { NgModule } from '@angular/core';
import { MyPipe } from './my/my';
import { LabelFilterPipe } from './label-filter/label-filter';
@NgModule({
	declarations: [MyPipe,
    LabelFilterPipe],
	imports: [],
	exports: [MyPipe,
    LabelFilterPipe]
})
export class PipesModule {}
