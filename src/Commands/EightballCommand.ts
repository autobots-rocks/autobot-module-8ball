import { Command, CommandBase, CommandParser, Event } from '@autobot/common';
import { RichEmbed }                                  from "discord.js";

/**
 *
 */
@Command
export class EightballCommand extends CommandBase {

    public static responses = [
        'it is certain',
        'it is decidedly so',
        'without a doubt',
        'yes — definitely',
        'you may rely on it',
        'as I see it, yes',
        'most likely',
        'outlook good',
        'yes',
        'signs point to yes',
        'ask again later',
        'better not tell you now',
        'cannot predict now',
        'concentrate and ask again',
        'don’t count on it',
        'my reply is no',
        'my sources say no',
        'outlook not so good',
        'very doubtful'
    ];

    public constructor() {

        //
        // Set this commands configuration.
        //
        super({

            event: Event.MESSAGE,
            name: '8ball',
            group: 'fun',
            description: 'Returns a random value like an 8ball would.'

        });

    }

    /**
     * Called when a command matches config.name.
     *
     * @param command Parsed out commamd
     *
     */
    public async run(command: CommandParser) {

        const embed = new RichEmbed().setTitle('8ball says..')
                                     .setDescription(EightballCommand.responses[ Math.floor(EightballCommand.responses.length * Math.random()) ]);

        command.obj.channel.send(embed);

    }

}
