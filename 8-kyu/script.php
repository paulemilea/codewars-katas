<?php

// Reversing Words in a String
function reverse($str)
{
  $arr = explode(' ', $str);
  $reversedArr = array_reverse($arr);
  $reversedStr = implode(' ', $reversedArr);
  return $reversedStr;
}
