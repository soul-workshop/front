import { JWTTokens } from 'rilata2/src/app/jwt/types';
import { Observable } from 'rxjs';
import { TelegramAuthDTO } from 'app/shared/user/telegram-auth-dto';

export interface Authentificationable {
    userAuthentification(telegramAuthDTO: TelegramAuthDTO): Observable<JWTTokens>;
}