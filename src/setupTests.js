import 'jest-canvas-mock';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResizeObserver from 'resize-observer-polyfill';

global.ResizeObserver = ResizeObserver;

configure({ adapter: new Adapter() });
