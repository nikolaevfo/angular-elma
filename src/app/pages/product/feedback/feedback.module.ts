import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FeedbackComponent} from './feedback.component';

@NgModule({
    declarations: [FeedbackComponent],
    imports: [RouterModule],
    exports: [FeedbackComponent],
})
export class FeedbackModule {}
