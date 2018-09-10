import R from 'ramda'
import API from '../../src/services/api'
import FixtureAPI from '../../src/services/fixtureApi'

import rateLimit from '../../src/fixtures/rateLimit.json'
import gantman from '../../src/fixtures/gantman.json'
import skellock from '../../src/fixtures/skellock.json'

test('All fixtures map to actual API', () => {
  const fixtureKeys = R.keys(FixtureAPI).sort()
  const apiKeys = R.keys(API.create())

  const intersection = R.intersection(fixtureKeys, apiKeys).sort()

  // There is no difference between the intersection and all fixtures
  expect(R.equals(fixtureKeys, intersection)).toBe(true)
})

test('FixtureAPI getRate returns the right file', () => {
  const expectedFile = rateLimit

  expect(FixtureAPI.getRate()).toEqual({
    ok: true,
    data: expectedFile,
  })
})

test('FixtureAPI getUser returns the right file for gantman', () => {
  const expectedFile = gantman

  expect(FixtureAPI.getUser('GantMan')).toEqual({
    ok: true,
    data: expectedFile,
  })
})

test('FixtureAPI getUser returns the right file for skellock as default', () => {
  const expectedFile = skellock

  expect(FixtureAPI.getUser('Whatever')).toEqual({
    ok: true,
    data: expectedFile,
  })
})
