function isLeapYear(yr)
{
    if(yr%4==0)
    {
        if (yr % 100 == 0 && yr % 400 != 0) 
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    else
    {
        return false;
    }
}
// console.log(isleapyear(2004));
export{isLeapYear};