import LogLevel from './LogLevel';

export default interface LoggerOptions {
	name: string;
	minLevel?: LogLevel | keyof typeof LogLevel | string;
	colors?: boolean;
	emoji?: boolean;
	timestamps?: boolean;
}
