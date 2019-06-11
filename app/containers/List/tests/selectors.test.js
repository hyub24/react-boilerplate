import { selectListDomain, makeSelectList } from '../selectors';

describe('selectListDomain', () => {
  it('Expect selectListDomain to return correct initial state', () => {
    const expected = {
      loading: false,
      error: null,
      strings: [],
    };
    expect(selectListDomain({})).toEqual(expected);
  });
});

describe('makeSelectList', () => {
  it('should return correct state with sorted strings', () => {
    const expected = {
      error: null,
      strings: [
        {
          id: 3,
          input: 'apple',
        },
        {
          id: 1,
          input: 'banana',
        },
        {
          id: 2,
          input: 'banana',
        },
        {
          id: 4,
          input: 'car',
        },
      ],
    };
    const mockState = {
      list: {
        error: null,
        strings: [
          {
            id: 1,
            input: 'banana',
          },
          {
            id: 2,
            input: 'banana',
          },
          {
            id: 3,
            input: 'apple',
          },
          {
            id: 4,
            input: 'car',
          },
        ],
      },
    };
    expect(makeSelectList()(mockState)).toEqual(expected);
  });
});
