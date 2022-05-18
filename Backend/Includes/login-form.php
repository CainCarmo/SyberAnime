        <section id="login--hidden">

            <form method="POST" id="login">

                <i class="fas fa-times" id="login__times"></i>

                <header id="login__header">

                    <h2 id="login__logo">SyberAnime</h2>

                    <!-- Mensagem de erro -->

                </header>

                <div id="login__fields">

                    <div class="login__field">

                        <div class="login__icon--wrapper">
                            <i class="fa-solid fa-user"></i>
                        </div>

                        <input type="email" name="login__email" id="login__email" class="login__input" placeholder="Digite seu email:" required>
                        <div class="underline"></div>

                    </div>

                    <div class="login__field">

                        <div class="login__icon--wrapper">
                            <i class="fa-solid fa-lock"></i>
                        </div>

                        <input type="password" name="login__pass" id="login__pass" class="login__input" placeholder="Digite sua senha:" required>
                        <div class="underline"></div>

                    </div>

                    <button type="submit" name="acao" value="login" id="login__btn">Entrar</button>

                </div>

                <footer id="login__footer">

                    <span class="login__alt">Ou entre usando</span>

                    <div class="login__medias">

                        <div class="login__circle" id="login__github">

                            <i class="fa-brands fa-github"></i>

                        </div>

                        <div class="login__circle" id="login__twitter">

                            <i class="fa-brands fa-twitter"></i>

                        </div>

                        <div class="login__circle" id="login__google">

                            <i class="fa-brands fa-google"></i>

                        </div>

                    </div>

                    <span>
                        <a href="register.php">Crie sua conta</a>
                    </span>

                </footer>

            </form>

        </section>

