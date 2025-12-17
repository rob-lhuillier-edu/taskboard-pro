import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Tasks } from './tasks';
import { TaskService } from '../../core/services/taskService';
import { map } from 'rxjs';

fdescribe('TasksPage Component - Rendu', () => {
  let component: Tasks;
  let fixture: ComponentFixture<Tasks>;
  let service: TaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tasks],
      providers: [
        provideRouter([]),
        TaskService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tasks);
    component = fixture.componentInstance;
    service = TestBed.inject(TaskService);
    
    // Partir d'un état propre
    service.clearTasks();
    fixture.detectChanges();
  });

it('devrait afficher le bon nombre de tâches', () => {
  service.addTask('Tâche 1');
  service.addTask('Tâche 2');

  fixture.detectChanges();

  const items = fixture.nativeElement.querySelectorAll('li');
  expect(items.length).toBe(2);
});

it('devrait afficher le titre des tâches', () => {
  service.addTask('Apprendre Angular');
  service.addTask('Maîtriser les tests');

  fixture.detectChanges();

  const items = fixture.nativeElement.querySelectorAll('li');
  expect(items[0].textContent).toContain('Apprendre Angular');
  expect(items[1].textContent).toContain('Maîtriser les tests');
});
it('devrait filtrer les tâches complétées', () => {
  service.addTask('Tâche 1');
  const task = service.getTaskId('Tâche 1')
  if (task) {service.endTask(task.id)}
  service.addTask('Tâche 2');

  component.onSelected({ target: { value: 'complete' } } as any);
  fixture.detectChanges();

  const items = fixture.nativeElement.querySelectorAll('li');
  expect(items.length).toBe(1);
  expect(items[0].textContent).toContain('Tâche 1');
});
});