echo "Do you already have Better Discord installed? (y/n)" 

read -p "> " installed

if [[ "$installed" != "n" && "$installed" != "y" ]]; then
    echo "not a valid option, exiting"
    exit
fi

if [[ "$installed" == "n" ]]; then
    printf "installing better discord...\n"
    # close discord
    pkill -f discord
    # install BetterDiscordCTL
    curl -O https://raw.githubusercontent.com/bb010g/betterdiscordctl/master/betterdiscordctl
    # make it executable
    chmod +x betterdiscordctl
    # move it to bin folder, this is where shell programs are located
    sudo mv betterdiscordctl /usr/local/bin 
    # use BetterDiscordCTL to install better discord
    betterdiscordctl install
fi

printf "installing fuck gifts plugin...\n"

# download fuck gifts
curl -O https://raw.githubusercontent.com/JustTemmie/fuckGifts/main/fuckGifts.plugin.js 
# move fuck gifts into the right folder
mv ~/fuckGifts.plugin.js ~/.config/BetterDiscord/plugins/

printf "enabling fuck gifts...\n"

if [[ "$installed" == "n" ]]; then
    # change the active plugins to just be fuck gifts
    echo '{"fuckGifts": true}' > ~/.config/BetterDiscord/data/stable/plugins.json 
else
    # enable the fuck gifts plugin using python
    python -c "import json; f=open('~/.config/BetterDiscord/data/stable/plugins.json', 'r+'); data=json.load(f); data.append({'fuckGifts': true}); f.seek(0); json.dump(data,f); f.truncate(); f.close()"
fi


if [[ "$installed" == "n" ]]; then
    printf "deleting temporary files made by the installer...\n"
    # delete better BetterDiscordCTL
    sudo rm /usr/local/bin/betterdiscordctl
fi

printf "finished!\nopen discord and you should be good to go!"