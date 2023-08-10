import { produce } from 'immer';
import { create } from 'zustand';

//devtools
import { mountStoreDevtool } from 'simple-zustand-devtools';

import { v4 as uuidv4 } from 'uuid';

import {
  Element
} from './interfaces/pathList.interface';