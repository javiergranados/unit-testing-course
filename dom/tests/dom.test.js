import { vi, describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs'
import path from 'path'
import { Window } from 'happy-dom'
import { showError } from '../util/dom';

const htmlDocPath = path.join(process.cwd(), 'index.html')
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString()

const window = new Window()
const document = window.document
document.write(htmlDocumentContent)

vi.stubGlobal('document', document)

describe('showError()', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlDocumentContent);
  });

  it('should add an error paragraph to the id="errors" element', () => {
    showError('test')
    const errorsEl = document.getElementById('errors')

    expect(errorsEl.firstElementChild).not.toBeNull()
  })

  it('should not contain an error paragraph initially', () => {
    const errorsEl = document.getElementById('errors')

    expect(errorsEl.firstElementChild).toBeNull()
  })

  it('should output the provided message in the error paragraph', () => {
    const errorMessage = 'Test';

    showError(errorMessage);
    const errorsEl = document.getElementById('errors');

    expect(errorsEl.firstElementChild.textContent).toBe(errorMessage);
  });
});
