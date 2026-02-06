import { startStimulusApp } from '@symfony/stimulus-bundle';
import CelebrateController from './controllers/celebrate_controller.js';

const app = startStimulusApp();
// register any custom, 3rd party controllers here
app.register('celebrate', CelebrateController);
