echo "Do you already have Better Discord installed? (y/n)" 

read -p "> " installed

if [[ "$installed" != "n" && "$installed" != "y" ]]; then
    echo "not a valid option, exiting"
    exit
fi

# close discord
pkill -f discord

if [[ "$installed" == "n" ]]; then
    printf "installing better discord...\n"
    # install BetterDiscordCTL
    curl -O https://raw.githubusercontent.com/bb010g/betterdiscordctl/master/betterdiscordctl
    # make it executable
    chmod +x betterdiscordctl
    printf "\n\n\nsudo privliges required to move file into /usr/local/bin\nthis file will be deleted later.\n\n"
    # move it to bin folder, this is where shell programs are located
    sudo mv betterdiscordctl /usr/local/bin 
    # use BetterDiscordCTL to install better discord
    betterdiscordctl install
fi

printf "installing fuck gifts plugin...\n"

# check if it's already installed, if it is, delete it
if [ -f "$HOME/.config/BetterDiscord/plugins/fuckGifts.plugin.js" ]; then
    echo "plugin already installed, deleting the existing one..."
    rm $HOME/.config/BetterDiscord/plugins/fuckGifts.plugin.js
fi

# download fuck gifts
curl -O https://raw.githubusercontent.com/JustTemmie/fuckGifts/main/fuckGifts.plugin.js 
# move fuck gifts into the right folder
mv ~/fuckGifts.plugin.js ~/.config/BetterDiscord/plugins/

printf "enabling fuck gifts...\n"

if [[ "$installed" == "n" ]]; then
    # change the active plugins to just be fuck gifts
    echo '{"fuckGifts": true}' > $HOME/.config/BetterDiscord/data/stable/plugins.json 
else
    # enable the fuck gifts plugin using sed
    sed -i 's/}/,"fuckGifts":true}/' $HOME/.config/BetterDiscord/data/stable/plugins.json
fi


if [[ "$installed" == "n" ]]; then
    printf "deleting temporary files made by the installer...\n"
    # delete better BetterDiscordCTL
    sudo rm /usr/local/bin/betterdiscordctl
    rm installFuckGifts.sh
fi

printf "finished!\nopen discord and you should be good to go!"