import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);

  //screen object를 이용해서 원하는 엘리먼트에 접근 (id로 접근)
  const counterElement = screen.getByTestId('counter');
  //id가 count인 엘리먼트의 텍스트가 0인지 텍스트
  expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct Text', () => {
  // App 컴포넌트를 렌더링합니다.
  render(<App />);

  //screen object를 이용해서 원하는 엘리먼트에 접근 (id로 접근)
  const minusButtonElement = screen.getByTestId('minus-button');
  // id가 minus-button인 엘리먼트의 버튼 텍스트가 - 인지 테스트
  expect(minusButtonElement).toHaveTextContent('-');
});

test('plus button has correct Text', () => {
  // App 컴포넌트를 렌더링합니다.
  render(<App />);

  //screen object를 이용해서 원하는 엘리먼트에 접근 (id로 접근)
  const plusButtonElement = screen.getByTestId('plus-button');
  // id가 plus-button인 엘리먼트의 버튼 텍스트가 + 인지 테스트
  expect(plusButtonElement).toHaveTextContent('+');
});

test('When the + button is pressed, the counter changes to 1', () => {
  // App 컴포넌트를 렌더링합니다.
  render(<App />);
  // screen object를 이용해서 원하는 엘리먼트에 접근 (id로 접근)
  const buttonElement = screen.getByTestId('plus-button');
  // click plus button
  fireEvent.click(buttonElement);

  // 카운터가 0에서 +1 증가해서 1이 됩니다.
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(1);
});

test('When the - button is pressed, the counter changes to -1', () => {
  // App 컴포넌트를 렌더링합니다.
  render(<App />);
  // screen object를 이용해서 원하는 엘리먼트에 접근 (id로 접근)
  const buttonElement = screen.getByTestId('minus-button');
  // click plus button
  fireEvent.click(buttonElement);

  // 카운터가 0에서 -1 감소해서 1이 됩니다.
  const counterElement = screen.getByTestId('counter');
  expect(counterElement).toHaveTextContent(-1);
});

test('on/off button has blue color', () => {
  // App 컴포넌트를 렌더링합니다.
  render(<App />);
  // screen object를 이용해서 원하는 엘리먼트에 접근 (id로 접근)
  const buttonElement = screen.getByTestId('on/off-button');
  // on/off 버튼 색상을 블루색으로
  expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
});

test('Prevent the -,+ button from being pressed when the on/off button is clicked', () => {
  // App 컴포넌트를 렌더링합니다.
  render(<App />);
  // screen object를 이용해서 원하는 엘리먼트에 접근 (id로 접근)
  const onOffButtonElement = screen.getByTestId('on/off-button');
  // click onOffButtonElement
  fireEvent.click(onOffButtonElement);
  // screen object를 이용해서 원하는 엘리먼트에 접근 (id로 접근)
  const plusButtonElement = screen.getByTestId('plus-button');
  expect(plusButtonElement).toBeDisabled();
});
