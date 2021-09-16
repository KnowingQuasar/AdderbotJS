import { v5 as uuidv5 } from 'uuid';
import { namespaceUuid } from '../config.json';

function generate_uuid(name: string): string {
    return uuidv5(name, namespaceUuid);
}

export {
    generate_uuid
}