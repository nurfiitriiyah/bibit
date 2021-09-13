ECHO "======================="
ECHO "3. Get Movie docker compose"
ECHO "======================="
read -p 'run up by docker-compose (y/n)? ' uservar
echo Thankyou $uservar we now have your login details
if [ $uservar = 'y' ]
then
echo "start docker compose this will create image mysql and movie img"
docker-compose up -d
pwd
fi
