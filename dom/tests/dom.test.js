import { vi, describe, it, expect } from 'vitest';
import fs from 'fs'
import path from 'path'
import { Window } from 'happy-dom'
import { showError } from '../util/dom';

const htmlDocPath = path.join(process.cwd(), 'index.html')
const htmlDocumentcontent = fs.readFileSync(htmlDocPath).toString()

const window = new Window()
const document = window.document
document.write(htmlDocumentcontent)

vi.stubGlobal('document', document)

describe('showError()', () => {
  it('should add an error paragraph to the id="errors" element', () => {
    showError('test')

    const errorsEl = document.getElementById('errors')

    expect(errorsEl.firstElementChild).not.toBeNull()
  })
});
