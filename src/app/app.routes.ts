import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsComponent } from './topics/topics.component';
import { QuestionsComponent } from './questions/questions.component';

export const routes: Routes = [
    { path: '', redirectTo: '/topics', pathMatch: 'full' },
    { path: 'topics', component: TopicsComponent },
    { path: 'topics/:topicId/questions', component: QuestionsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }
