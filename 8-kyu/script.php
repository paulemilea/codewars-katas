<?php

// Reversing Words in a String
function reverse($str)
{
  $arr = explode(' ', $str);
  $reversedArr = array_reverse($arr);
  $reversedStr = implode(' ', $reversedArr);
  return $reversedStr;
}

// Convert a string to an array
function string_to_array($s)
{
  return explode(' ', $s);
}

// Drink about
function people_with_age_drink(int $old): string
{
  if ($old < 14) {
    return 'drink toddy';
  } else if ($old < 18) {
    return 'drink coke';
  } else if ($old < 21) {
    return 'drink beer';
  } else {
    return 'drink whisky';
  }
};

// You Can't Code Under Pressure #1
function doubleInteger($i)
{
  return $i * 2;
}

// Even or Odd
function even_or_odd(int $n): string
{
  return ($n % 2 === 0) ? 'Even' : 'Odd';
}

// You only need one - Beginner
function solution($a, $x)
{
  return in_array($x, $a);
}