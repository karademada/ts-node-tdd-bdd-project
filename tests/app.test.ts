import request from 'supertest';
import app from '../src/app';
import { Express } from 'express';
import { describe } from 'node:test';

describe('GET /', () => {
  let expressApp: Express

  beforeEach(() => {
    expressApp = app;
  });

  it('responds with Hello, World!', async () => {
    const response = await request(expressApp)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200);

    expect(response.text).toBe('Hello, World!');
  });
});
