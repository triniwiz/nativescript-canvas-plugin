import { Document } from "./DOM/Document";
import './window';
import './resize';
import './process'

(global as any).document = (global as any).document || new Document();
