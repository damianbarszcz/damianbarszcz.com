<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\PersonData;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string','min:3', 'max:50'],
            'surename' => ['required', 'string','min:3', 'max:50'],
            'email' => ['required', 'string', 'email', 'max:128', 'unique:users'],
            'gender'=> ['required', 'string', 'max:50'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'role' => ['required', 'string'],
            'day' => ['required'],
            'month' => ['required'],
            'year' => ['required'],
        ]);
    }

    public function register(Request $request){
        // Pobranie pół daty urodzenia
        $year = $request->input('year'); $month = $request->input('month'); $day = $request->input('day');

        $birthday = $year.'-'.$month.'-'.$day;

        // złączenie 3-pól w 1 pole 
        $request->merge([ 'birthday' => $birthday ]);

        $this->validator($request->all())->validate();

        $bd = Carbon::parse($birthday);

        event(new Registered($user = $this->create($request->all())));

        $this->guard()->login($user);

        if ($response = $this->registered($request, $user)) {
            return $response;
        }

        return $request->wantsJson()
                ? new Response('', 201)
                : redirect($this->redirectPath());
    }


    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {
        $user =User::create([
            'email' => $data['email'],
            'role' => $data['role'],
            'password' => Hash::make($data['password']),
        ]);

        $user->PersonData()->create([
            'name' => $data['name'],
            'surename' => $data['surename'],
            'gender' => $data['gender'],
            'birthday' => $data['birthday'],
        ]);

        return $user;
    }
}
