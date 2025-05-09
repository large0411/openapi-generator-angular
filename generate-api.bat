@echo off
echo API Generator
echo ==============================

echo Installing dependencies...
call npm install

echo.
echo Running API generator...
call npm run generate

echo.
echo Process completed. Press any key to exit.
pause > nul
